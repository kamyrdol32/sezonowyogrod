// CSS
import './App.css';

// Imports
import Home from './Home/Home.js';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Gallery from "./Gallery/Gallery";

import {BrowserRouter, Route, Routes} from "react-router-dom";

// Code
function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
