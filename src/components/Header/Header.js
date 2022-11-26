import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <h1 className="header-title">TheCocktailDB</h1>
                <nav className="header-nav">
                    <ul className="nav-lists">
                        <li className="nav-list">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-list">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
