import React, { useRef } from 'react'
import './SearchBar.css';

const SearchBar = ({ searchTask }) => {
    const searchQueryRef = useRef();

    const searchTaskHandler = (e) => {
        e.preventDefault();
        const enteredSearchQuery = searchQueryRef.current.value
        const searchQuery = {query: enteredSearchQuery}
    
        searchTask(searchQuery);
    }


    return (
        <form className="searchBar">
            <input ref={searchQueryRef} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={searchTaskHandler} />
        </form>
    )
}

export default SearchBar
