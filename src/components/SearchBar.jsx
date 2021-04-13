import React, {useState} from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'

function SearchBar() {

    // How to set a variable in in react
    const [input, setInput] = useState('');

    const search = e => {
        e.preventDefault();
    }

    return (
        <form className="search">
            <div className="search__bar">
                <SearchIcon className="search__icon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            <div className="search__buttons">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default SearchBar

