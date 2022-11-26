import React, { useRef, useContext } from "react";
import CocktailContext from "./../../context/CocktailContext";
import "./Search.css";

const Search = (props) => {
    const cocktailContext = useContext(CocktailContext);
    const searchValue = useRef("");

    const searchCocktailHandler = () => {
        cocktailContext.setSearchTerm(searchValue.current.value);
    };

    return (
        <div className="search">
            <div className="search-form">
                <h3 className="search-title">Search Your Favorite Cocktail</h3>
                <input
                    type="text"
                    id="name"
                    ref={searchValue}
                    className="search-input"
                    placeholder="Search Cocktail..."
                    onChange={searchCocktailHandler}
                />
            </div>
        </div>
    );
};

export default Search;
