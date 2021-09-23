import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
    return (
        <div className="search">
            <input
                type="text"
                className="search__input"
                placeholder="میخوای چی یاد بگیری؟!"
            />
            <SearchIcon className="search__icon" />
        </div>
    );
}

export default Search;
