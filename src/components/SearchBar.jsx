import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'

function SearchBar() {
    return (
        <div className="search">
            <div className="search__bar">
                <SearchIcon className="search__icon" />
                <input />
                <MicIcon />
            </div>

            <div className="search__buttons">
                
            </div>
        </div>
    )
}

export default SearchBar

