import React from "react";
import "./Languages.css";
import LanguageItem from "./LanguageItem/LanguageItem";

function Languages() {
    return (
        <div className="Languages">
            <h3 className="languages__title">
                علاقه مند به یادگیری چه زبانی هستید؟
            </h3>
            <div className="languages__wrapper">
                <LanguageItem
                    language="زبان انگلیسی"
                    img="https://tikkaa.ir/img/index/header/unitedKingdom.png"
                    link="https://tikkaa.ir/find-teachers/english"
                />
                <LanguageItem
                    language="زبان آلمانی"
                    img="https://tikkaa.ir/img/index/header/germany.png"
                    link="https://tikkaa.ir/find-teachers/germany"
                />
                <LanguageItem
                    language="زبان فرانسه"
                    img="https://tikkaa.ir/img/index/header/france.png"
                    link="https://tikkaa.ir/find-teachers/french"
                />
                <LanguageItem
                    language="زبان ترکی استانبولی"
                    img="https://tikkaa.ir/img/index/header/turkey.png"
                    link="https://tikkaa.ir/find-teachers/turkish"
                />
                <LanguageItem
                    language="زبان کره ای"
                    img="https://tikkaa.ir/img/index/header/southKorea.png"
                    link="https://tikkaa.ir/find-teachers/turkish"
                />
                <LanguageItem
                    language="زبان روسی"
                    img="https://tikkaa.ir/img/index/header/russia.png"
                    link="https://tikkaa.ir/find-teachers/russian"
                />
                <LanguageItem
                    language="زبان عربی"
                    img="https://tikkaa.ir/img/index/header/saudiArabia.png"
                    link="https://tikkaa.ir/find-teachers/arabic"
                />
                <LanguageItem
                    language="زبان اسپانیایی"
                    img="https://tikkaa.ir/img/index/header/spain.png"
                    link="https://tikkaa.ir/find-teachers/spanish"
                />
                <LanguageItem
                    language="زبان ایتالیایی"
                    img="https://tikkaa.ir/img/index/header/italy.png"
                    link="https://tikkaa.ir/find-teachers/italian"
                />
                <LanguageItem
                    language="زبان چینی"
                    img="https://tikkaa.ir/img/index/header/chinese.png"
                    link="https://tikkaa.ir/find-teachers/chinese"
                />
                <LanguageItem
                    language="زبان هلندی"
                    img="https://tikkaa.ir/img/index/header/netherlands.png"
                    link="https://tikkaa.ir/find-teachers/dutch"
                />
                <LanguageItem
                    language="زبان ژاپنی"
                    img="https://tikkaa.ir/img/index/header/japan.png"
                    link="https://tikkaa.ir/find-teachers/japanese"
                />
                <LanguageItem
                    language="زبان سوئدی"
                    img="https://tikkaa.ir/img/index/header/sweden.jpg"
                    link="https://tikkaa.ir/find-teachers/swedish"
                />
                <LanguageItem
                    language="زبان هندی"
                    img="https://tikkaa.ir/img/index/header/india.png"
                    link="https://tikkaa.ir/find-teachers/indian"
                />
            </div>
        </div>
    );
}

export default Languages;
