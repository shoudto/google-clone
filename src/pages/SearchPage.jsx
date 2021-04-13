import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../components/StateProvider'
import useGoogleSearch from '../hooks/useGoogleSearch'
import Response from '../Response'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();

    // LIVE API CALL
    // const { data } = useGoogleSearch(term); 

    const data = Response;

    console.log(data);

    return (
        <div>
            <div className="searchPage">
                <div className="searchPage__header">
                    <Link to="/">
                        <img className="searchPage__logo" 
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                        alt="logo"/>
                    </Link>

                    <div className="searchPage__headerBody">
                        <SearchBar hideButtons />
                    </div>
                </div>

                <div className="searchPage__results">

                </div>
            </div>
        </div>
    )
}

export default SearchPage;

