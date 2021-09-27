import React, { useState, useEffect } from "react";
import "./Articles.css";
import Article from "./Article/Article";
import Pagination from "./Pagination/Pagination";
import axios from "axios";

function Articles() {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [pagination, setPagination] = useState({});

    const getData = async () => {
        try {
            const res = await axios.get("/api/getBlog");

            const { data, ...rest } = res.data.Parameters;
            setPagination(rest);
            setArticles(data);
            setIsLoading(false);
        } catch (error) {
            console.log("Error Fetching!!!");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (isLoading) {
        return (
            <div className="articles">
                <h1 className="loading">در حال لود شدن...</h1>
            </div>
        );
    }

    return (
        <div className="articles">
            {articles?.map((article, ind) => (
                <Article article={article} key={ind} />
            ))}

            <Pagination pagination={pagination} />
        </div>
    );
}

export default Articles;
