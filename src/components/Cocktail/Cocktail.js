import React from "react";
import { Link } from "react-router-dom";
import "./Cocktail.css";

const Cocktail = (props) => {
    return (
        <article className="cocktail">
            <div className="cocktail-image">
                <img src={props.image} alt="image not found" />
            </div>
            <div className="cocktail-content">
                <h2 className="cocktail-title">{props.name}</h2>
                <h5 className="cocktail-sub-title">{props.glass}</h5>
                <span className="cocktail-span">{props.info}</span>
                <Link to={`/detail/${props.id}`} className="cocktail-button">
                    Details
                </Link>
            </div>
        </article>
    );
};

export default Cocktail;
