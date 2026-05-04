import './index.css';
import './App.css';

import Header from "./components/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";

function App() {
    return (
            <div className="min-h-screen">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
    );
}

export default App;
