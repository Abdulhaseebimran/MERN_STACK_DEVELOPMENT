import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
                <h1 className="text-3xl font-bold">ABDUL STORE</h1>
                <ul className="flex space-x-6 mt-4 sm:mt-0">
                    <li>
                        <Link to="/" className="hover:text-gray-400 text-2xl">Home</Link>
                    </li>
                    <li>
                        <Link to="/userform" className="hover:text-gray-400 text-2xl">About </Link>
                    </li>
                    <li>
                        <Link to="/api" className="hover:text-gray-400 text-2xl">Contact us </Link>
                    </li>
                    <li>
                        <Link to="/counter" className="hover:text-gray-400 text-2xl">Services</Link>
                        {/* <a href="#" className="hover:text-gray-400 text-2xl">
                            Contact
                        </a> */}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
