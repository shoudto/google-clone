import React, {useState} from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from "./StateProvider"
import { actionTypes } from '../reducer';

function SearchBar({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();

    // How to set a variable in in react
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    }

    return (
        <form className="search">
            <div className="search__bar">
                <SearchIcon className="search__icon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (
            <div className="search__buttons">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
            ) : (
            <div className="search__buttons">
                <Button className="search_buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
            </div>
            )}
        </form>
    )
}

export default SearchBar

