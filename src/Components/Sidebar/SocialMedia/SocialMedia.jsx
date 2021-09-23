import React from "react";
import "./SocialMedia.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import PinterestIcon from "@material-ui/icons/Pinterest";

function SocialMedia() {
    return (
        <div className="social-media">
            <img
                src="https://tikkaa.ir/img/blog/tikkaa.png"
                alt="Tikkaa"
                className="social-media__img"
            />
            <h3 className="social-media__title">
                مطالب دیگر تیکا را از دست ندهید ...
            </h3>

            <div className="social-media__items">
                <a
                    className="social-media__item social-media__item--instagram"
                    href=""
                >
                    <InstagramIcon className="social-media__icon" />
                </a>
                <a
                    className="social-media__item social-media__item--youtube"
                    href=""
                >
                    <YouTubeIcon className="social-media__icon" />
                </a>
                <a
                    className="social-media__item social-media__item--linkedin"
                    href=""
                >
                    <LinkedInIcon className="social-media__icon" />
                </a>
                <a
                    className="social-media__item social-media__item--twitter"
                    href=""
                >
                    <TwitterIcon className="social-media__icon" />
                </a>
                <a
                    className="social-media__item social-media__item--telegram"
                    href=""
                >
                    <TelegramIcon className="social-media__icon" />
                </a>
                <a
                    className="social-media__item social-media__item--facebook"
                    href=""
                >
                    <FacebookIcon className="social-media__icon" />
                </a>
                <a
                    className="social-media__item  social-media__item--pinterest"
                    href=""
                >
                    <PinterestIcon className="social-media__icon" />
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;
