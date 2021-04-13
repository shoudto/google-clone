import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../components/StateProvider'
import useGoogleSearch from '../hooks/useGoogleSearch'
import Response from '../Response'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import SearchIcon from '@material-ui/icons/Search'


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
                        <div className="searchPage__options">
                            <div className="optionsLeft">
                                <div className="searchPage__options">
                                    <SearchIcon />
                                    <Link to="/all">All</Link>
                                </div>
                                <div className="searchPage__options">
                                    <DescriptionIcon />
                                    <Link to="/news">News</Link>
                                </div>
                                <div className="searchPage__options">
                                    <ImageIcon />
                                    <Link to="/images">Images</Link>
                                </div>
                                <div className="searchPage__options">
                                    <LocalOfferIcon />
                                    <Link to="/shopping">shopping</Link>
                                </div>
                                <div className="searchPage__options">
                                    <RoomIcon />
                                    <Link to="/maps">maps</Link>
                                </div>
                                <div className="searchPage__options">
                                    <MoreVertIcon />
                                    <Link to="/more">more</Link>
                                </div>
                            </div>

                            <div className="optionsRight">

                            </div>
                        </div>
                    </div>

                    <div className="searchPage__results">

                    </div>
                </div>

                <div className="searchPage__results">

                </div>
            </div>
        </div>
    )
}

export default SearchPage;

