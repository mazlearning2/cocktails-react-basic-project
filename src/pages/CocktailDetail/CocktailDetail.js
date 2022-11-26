import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./../../components/Loading/Loading";
import "./CocktailDetail.css";

const urlApi = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const CocktailDetail = (props) => {
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    const { id } = useParams();

    const fetchCocktailDetail = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${urlApi}${id}`);
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                setCocktail(drinks[0]);
                setLoading(false);
            } else {
                setCocktail(null);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCocktailDetail();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (!cocktail) {
        return <h1 className="message">No Cocktail To Display.</h1>;
    }

    return (
        <div className="container container-detail">
            <Link to="/" className="detail-link">
                Go To Cocktail List
            </Link>
            <article className="detail">
                <div className="detail-image">
                    <img src={cocktail.strDrinkThumb} alt="image not found" />
                </div>
                <div className="detail-content">
                    <ul className="detail-lists">
                        <li className="detail-list">
                            <span>name : </span>
                            <p>{cocktail.strDrink}</p>
                        </li>
                        <li className="detail-list">
                            <span>Category : </span>
                            <p>{cocktail.strCategory}</p>
                        </li>
                        <li className="detail-list">
                            <span>Info : </span>
                            <p>{cocktail.strAlcoholic}</p>
                        </li>
                        <li className="detail-list">
                            <span>Glass : </span>
                            <p>{cocktail.strGlass}</p>
                        </li>
                        <li className="detail-list">
                            <span>Instructions : </span>
                            <p>{cocktail.strInstructions}</p>
                        </li>
                        <li className="detail-list">
                            <span>Ingredients : </span>
                            <p>
                                {cocktail.strIngredient1},{" "}
                                {cocktail.strIngredient2} ,{" "}
                                {cocktail.strIngredient3}, 
                                {cocktail.strIngredient4}
                            </p>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    );
};

export default CocktailDetail;
