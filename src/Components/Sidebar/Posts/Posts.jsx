import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import VisibilityIcon from "@material-ui/icons/Visibility";

function Posts({ icon, posts }) {
    return (
        <div className="posts">
            <div className="posts__title">
                {icon === "LibraryBooksIcon" ? (
                    <LibraryBooksIcon className="posts__icon" />
                ) : (
                    <VisibilityIcon className="posts__icon" />
                )}
                <h3>آخرین مطالب</h3>
            </div>
            <div className="posts__wrapper">
                {posts?.map((post, ind) => (
                    <Post post={post} key={ind} />
                ))}
            </div>
        </div>
    );
}

export default Posts;
