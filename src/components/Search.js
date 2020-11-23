import React from 'react'

const Search = props => {
    const {searchTxt, searchHandle} = props;
    return (
    <div>
        <input
        type="text"
        className="input search-bar"
        name="search"
        placeholder="Search"
        value={searchTxt}
        onChange={searchHandle}
        />
    </div>
    );
}

export default Search;