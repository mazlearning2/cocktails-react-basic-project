import React from "react";
import Cocktail from "./../../components/Cocktail/Cocktail";
import "./Cocktails.css";

const Cocktails = (props) => {
    return (
        <div className="container cocktails-container">
            <h1 className="cocktails-title">Cocktails</h1>
            <div className="cocktails">
                {props.cocktailList.map((item) => {
                    return (
                        <Cocktail
                            key={item.id}
                            info={item.info}
                            glass={item.glass}
                            image={item.image}
                            name={item.name}
                            id={item.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Cocktails;
