import './index.css';
import './App.css';

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Outlet} from "react-router-dom";

function App() {
    return (
            <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-600">
                <Header/>
                <div>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
    );
}

export default App;
