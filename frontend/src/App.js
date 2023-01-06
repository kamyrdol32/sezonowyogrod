// CSS
import './App.css';

// Imports
import Home from './Home/Home.js';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Gallery from "./Gallery/Gallery";
import Auth from './Authorization/Auth';


import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';
import Reservation from "./Reservation/Reservation";

// Create a client
const queryClient = new QueryClient()

// Code
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
