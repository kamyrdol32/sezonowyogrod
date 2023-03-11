// CSS
import './App.css';

// Imports
import {createContext, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {isUsername} from "./Others/token.jsx";

// Components
import Home from './Home/Home.jsx';
import Auth from './Authorization/Auth.jsx';
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Reservation from "./Reservation/Reservation.jsx";
import Profile from "./Profile/Profile.jsx";
import Logout from "./Logout/Logout.jsx";
import Shop from "./Shop/Shop.jsx";

// Code
const queryClient = new QueryClient()
export const usernameContext = createContext()

function App() {

    const [username, setUsername] = useState(isUsername())

    return (
        <QueryClientProvider client={queryClient}>
            <usernameContext.Provider value={{username, setUsername}}>
                <BrowserRouter>
                    <Navbar />
                    <div id="site">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/auth" element={<Auth />} />
                            <Route path="/reservation" element={<Reservation />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route path="/shop" element={<Shop />} />
                        </Routes>
                    </div>
                    {/*<Footer />*/}
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
            </usernameContext.Provider>
        </QueryClientProvider>
    );
}

export default App;
