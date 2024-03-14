import React from 'react';

const CarSearching = ({ searchQuery, onSearch }) => {



    return (
        <div className="mb-3 position-relative">
            <input
                type="text"
                className="form-control rounded-0"
                id="searchInput"
                placeholder="Search..."
                value={searchQuery}
                onChange={onSearch}
            />
            <span
                className="position-absolute material-symbols-outlined"
                style={{ right: 10, top: "calc(50% - 0.7rem)" }}
            >
                search
            </span>
        </div>
    );
};

export default CarSearching;
