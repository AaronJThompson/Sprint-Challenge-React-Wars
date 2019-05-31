import React from 'react';
import './StarWars.css';

export default function Pagination(props) {
    let { nextPage, previousPage, nextPageCB, previousPageCB } = props;
    let nextStyle = {
        visibility: nextPage ? "initial" : "hidden",
    };
    let previousStyle = {
        visibility: previousPage ? "initial" : "hidden",
    };
    return (
        <div className="pagination">
            <button
                style={previousStyle}
                onClick={previousPageCB}
                className="previous-page"
            >
                {"<"}
            </button>

            <button
                style={nextStyle}
                onClick={nextPageCB}
                className="next-page"
            >
                {">"}
            </button>
        </div>
    );
}