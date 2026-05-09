import {useEffect, useState, useMemo} from "react";
import config from "../../../local.config.json";
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant.jsx";
import "../css/Restaurants.css";

function Restaurants(){
    const [restaurants, setRestaurants] = useState([]);

    const [tags, setTags] = useState([]);

    const [search, setSearch] = useState("");
    const [tagFilter, setTagFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [dateOrderFilter, setDateOrderFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(1);


    const fetchRestaurants = async (query = "") => {
        try {
            const res = await fetch(`${config["api-url"]}restaurants${query}`);
            const data = await res.json();
            setRestaurants(Array.isArray(data.restaurants) ? data.restaurants : []);
            setNumberOfPages(data.numberOfPages || 1);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
            setRestaurants([]);
        }
    };

    // initial load
    useEffect(() => {
        fetchRestaurants("?numberOfRestaurants=9&page=0");
    }, []);

    // load tags
    useEffect(() => {
        let mounted = true;
        fetch(config["api-url"] + "tags")
            .then((response) => response.json())
            .then((data) => {
                if (mounted) setTags(Array.isArray(data) ? data : []);
            })
            .catch((error) => console.error("Error fetching tags:", error));
        return () => {
            mounted = false;
        };
    }, []);

    const buildQuery = ({ pageOverride = null, tagOverride = null, priceOverride = null, dateOrderOverride = null, searchOverride = null } = {}) => {
        const params = new URLSearchParams();
        const tag = tagOverride !== null ? tagOverride : tagFilter;
        const price = priceOverride !== null ? priceOverride : priceFilter;
        const dateOrder = dateOrderOverride !== null ? dateOrderOverride : dateOrderFilter;
        const s = searchOverride !== null ? searchOverride : search;
        const page = pageOverride !== null ? pageOverride : currentPage;

        if (tag) params.append("tag", tag);
        if (price) params.append("priceRange", price);
        if (dateOrder) params.append("orderBy", dateOrder);
        if (s) params.append("name", s);
        if (page !== null){
            params.append("page", page.toString());
            params.append("numberOfRestaurants", "9");
        }
        const qs = params.toString();
        return qs ? `?${qs}` : "";
    };

    // appelé au clic du bouton Rechercher
    const handleSearch = (e) => {
        e?.preventDefault();
        setCurrentPage(0);
        const query = buildQuery();
        fetchRestaurants(query);
    };

    const tagsOptions = useMemo(
        () =>
            tags.map((tag) => (
                <option value={tag.id} key={tag.id}>
                    {tag.name}
                </option>
            )),
        [tags]
    );

    const cards = useMemo(
        () =>
            restaurants.map((restaurant) => (
                <CardRestaurant restaurant={restaurant} key={restaurant.id ?? restaurant.name} />
            )),
        [restaurants]
    );

    const pagination = useMemo(() => {
        let pages = [];
        for (let i = 0; i < numberOfPages ; i++) {
            pages.push(
                <button
                    key={i}
                    className={`pagination-button ${currentPage === i ? "active" : ""}`}
                    onClick={() => {
                        setCurrentPage(i);
                        const query = buildQuery({ pageOverride: i });
                        fetchRestaurants(query);
                    }}
                >
                    {i + 1}
                </button>
            );
        }
        return pages;
    }, [numberOfPages, currentPage, tagFilter, priceFilter, dateOrderFilter, search]);


    // handlers pour les selects : appliquer la valeur et lancer la recherche (page = 0)
    const handleTagChange = (e) => {
        const newTag = e.target.value;
        setTagFilter(newTag);
        setCurrentPage(0);
        const query = buildQuery({ pageOverride: 0, tagOverride: newTag });
        fetchRestaurants(query);
    };
    const handlePriceChange = (e) => {
        const newPrice = e.target.value;
        setPriceFilter(newPrice);
        setCurrentPage(0);
        const query = buildQuery({ pageOverride: 0, priceOverride: newPrice });
        fetchRestaurants(query);
    };
    const handleDateChange = (e) => {
        const newDateOrder = e.target.value;
        setDateOrderFilter(newDateOrder);
        setCurrentPage(0);
        const query = buildQuery({ pageOverride: 0, dateOrderOverride: newDateOrder });
        fetchRestaurants(query);
    };

    return(
        <div className="home">
            <h1>Les restaurants que nous avons visités.</h1>

            <div className="research-section">
                <div className="search-bar">
                    <input type="text" id="search-input" placeholder="Rechercher un restaurant..." className="search-input"  onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
                        if (e.key === "Enter") handleSearch(e);
                    }}/>
                    <button className="search-button" onClick={handleSearch}>Rechercher</button>
                </div>
                <div className="filters">
                    <select className="filter-select" id="tag-filter" onChange={handleTagChange}>
                        <option value="">Tous les types</option>
                        {tagsOptions}
                    </select>
                    <select className="filter-select" id="price-filter" onChange={handlePriceChange}>
                        <option value="">Tous les prix</option>
                        <option value="€">€</option>
                        <option value="€€">€€</option>
                        <option value="€€€">€€€</option>
                    </select>
                    <select className="filter-select" id="date-filter" onChange={handleDateChange}>
                        <option value="">Date</option>
                        <option value="desc">Du plus récent au plus ancien</option>
                        <option value="asc">Du plus ancien au plus récent</option>
                    </select>
                </div>
            </div>

            <div className="restaurants-grid">
                {cards}
            </div>

            <div className="pagination">
                {pagination}
            </div>

        </div>
    )
}

export default Restaurants;