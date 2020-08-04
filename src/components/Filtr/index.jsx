import React from 'react';

import './filter.scss';

const Filter = () => {
    return(
        <div className="btnFilter">
            <div className="allBtn">All</div>
            <div className="completeBtn">Complete</div>
            <div className="favoriteBtn">Favorite</div>
        </div>
    )
}

export default Filter;