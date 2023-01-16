// CSS
import './App.css';

// Imports
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Home from './Home/Home.js';
import Auth from './Authorization/Auth';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Gallery from "./Gallery/Gallery";
import Reservation from "./Reservation/Reservation";
import Profile from "./Profile/Profile";

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
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </div>
                <Footer />
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
