import React from 'react'

const SearchCountry = ({ search, handleSearch }) => {
    return (
        <div>
            <h3>Search Country</h3>
            <form>
                <input
                    className="search"
                    name="search"
                    placeholder="search country by name"
                    value={search}
                    onChange={handleSearch}
                />
            </form>

        </div>
    )
}

export default SearchCountry
