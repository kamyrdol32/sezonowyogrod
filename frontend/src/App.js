// CSS
import './App.css';

// Imports
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

// Components
import Home from './Home/Home.js';
import Auth from './Authorization/Auth';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Gallery from "./Gallery/Gallery";
import Reservation from "./Reservation/Reservation";

// Code
const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Navbar />
                <div id="site">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/reservation" element={<Reservation />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
