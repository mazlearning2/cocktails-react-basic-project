import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import CocktailDetail from "./../../pages/CocktailDetail/CocktailDetail";
import PageNotFound from "./../../pages/PageNotFound/PageNotFound";
import CocktailContext from "./../../context/CocktailContext";
import "./App.css";

const urlApi = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [cocktails, setCocktails] = useState([]);
    const fetchDrinks = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${urlApi}${searchTerm}`);
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
                const newCocktail = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = item;
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    };
                });
                setCocktails(newCocktail);
                // setLoading(false);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchDrinks();
    }, [searchTerm]);

    return (
        <>
            <Header />
            <CocktailContext.Provider
                value={{
                    loading: loading,
                    searchTerm: searchTerm,
                    setSearchTerm: setSearchTerm,
                    cocktails: cocktails,
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/detail/:id" element={<CocktailDetail />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </CocktailContext.Provider>
        </>
    );
};

export default App;
