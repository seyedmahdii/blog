import React from "react";
import "./Sidebar.css";
import Search from "./Search/Search";
import Languages from "./Languages/Languages";
import Posts from "./Posts/Posts";
import RecentPostBanner from "./RecentPostBanner/RecentPostBanner";
import SocialMedia from "./SocialMedia/SocialMedia";

import { recentPosts, modeVisitedPosts } from "../../Data/mock";

function Sidebar() {
    return (
        <div className="sidebar">
            <Search />
            <Languages />
            <Posts
                title="آخرین مطالب"
                icon="LibraryBooksIcon"
                posts={recentPosts}
            />
            <RecentPostBanner />
            <Posts
                title="پربازدیدترین"
                icon="VisibilityIcon"
                posts={modeVisitedPosts}
            />
            <SocialMedia />
        </div>
    );
}

export default Sidebar;
