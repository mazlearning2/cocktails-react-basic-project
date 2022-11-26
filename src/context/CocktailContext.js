import React from "react";

const CocktailContext = React.createContext({
    loading: false,
    searchTerm: "",
    setSearchTerm: () => {},
    cocktails: [],
});

export default CocktailContext;
