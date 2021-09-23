import React from "react";
import "./Post.css";

function Post({ post }) {
    return (
        <a className="post" href={post.link}>
            <img src={post.img} alt={post.caption} className="post__img" />
            <span className="post__caption">{post.caption}</span>
        </a>
    );
}

export default Post;
