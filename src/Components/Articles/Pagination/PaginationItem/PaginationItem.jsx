import React from "react";
import "./PaginationItem.css";

function PaginationItem({ number, current_page }) {
    return (
        <a
            href={`https://tikkaa.ir/api/getBlog?page=${number}`}
            className={`paginationItem ${
                current_page === number && `paginationItem--active`
            }`}
        >
            {number}
        </a>
    );
}

export default PaginationItem;
