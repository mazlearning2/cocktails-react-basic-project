import React, { useContext } from "react";
import Search from "./../../components/Search/Search";
import Loading from "./../../components/Loading/Loading";
import Cocktails from "../../containers/Cocktails/Cocktails";
import CocktailContext from "./../../context/CocktailContext";
import "./Home.css";

const Home = () => {
    const cocktailContext = useContext(CocktailContext);

    return (
        <>
            <Search />
            {cocktailContext.loading && <Loading />}
            {cocktailContext.cocktails.length < 1 ? (
                <h1 className="message">
                    No Cocktails Matched Your Search Criteria.
                </h1>
            ) : (
                <Cocktails cocktailList={cocktailContext.cocktails} />
            )}
        </>
    );
};

export default Home;
