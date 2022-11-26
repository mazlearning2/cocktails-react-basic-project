import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
    return (
        <div className="container container-not-found">
            <h2 className="not-found-title">oops! 404</h2>
            <Link to="/" className="not-found-link">Go Home</Link>
        </div>
    );
};

export default PageNotFound;
