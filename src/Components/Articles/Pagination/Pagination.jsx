import React from "react";
import "./Pagination.css";
import PaginationItem from "./PaginationItem/PaginationItem";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Pagination({ pagination }) {
    return (
        <div className="pagination">
            <a className="pagination__arrow" href={pagination.prev_page_url}>
                <ArrowForwardIosIcon className="pagination__arrow-icon" />
            </a>

            {/* Displaying up to 9 items without 3 dots */}
            {pagination.last_page <= 9 &&
                [...Array(pagination.last_page)].map((item, ind) => (
                    <PaginationItem
                        number={ind + 1}
                        current_page={pagination.current_page}
                    />
                ))}

            {/* Displaying more than 9 item with 3 dots */}
            {/* Displaying the first 8 items */}
            {pagination.last_page >= 10 &&
                [...Array(8)].map((item, ind) => (
                    <PaginationItem
                        number={ind + 1}
                        current_page={pagination.current_page}
                    />
                ))}
            {/* Displaying 3 dots */}
            {pagination.last_page >= 10 && (
                <div className="pagination__dots">...</div>
            )}

            {/* Displaying the last item if there's 10 items */}
            {pagination.last_page === 10 && (
                <PaginationItem
                    number={pagination.last_page}
                    current_page={pagination.current_page}
                />
            )}

            {/* Displaying last item and the one before last item if there's more than 10 items */}
            {pagination.last_page >= 11 && (
                <>
                    <PaginationItem
                        number={pagination.last_page - 1}
                        current_page={pagination.current_page}
                    />
                    <PaginationItem
                        number={pagination.last_page}
                        current_page={pagination.current_page}
                    />
                </>
            )}

            <a className="pagination__arrow" href={pagination.next_page_url}>
                <ArrowBackIosIcon className="pagination__arrow-icon" />
            </a>
        </div>
    );
}

export default Pagination;
