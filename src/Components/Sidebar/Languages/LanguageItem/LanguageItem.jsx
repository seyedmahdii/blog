import React from "react";
import "./LanguageItem.css";

function LanguageItem({ language, img, link }) {
    return (
        <a href={link} className="LanguageItem">
            <img src={img} alt={language} className="LanguageItem__img" />
            <span className="LanguageItem__name">{language}</span>
        </a>
    );
}

export default LanguageItem;
