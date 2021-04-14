import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../components/StateProvider'
import useGoogleSearch from '../hooks/useGoogleSearch'
import Response from '../Response'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from "@material-ui/icons/Description"
import ImageIcon from "@material-ui/icons/Image"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import MoreVertIcon from "@material-ui/icons/MoreVert"



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
                            {/* Beginning of Icon List - Left */}
                            <div className="optionsLeft">
                                <div className="searchPage__option">
                                    <SearchIcon />
                                    <Link to="/all">All</Link>
                                </div>
                                <div className="searchPage__option">
                                    <DescriptionIcon />
                                    <Link to="/news">News</Link>
                                </div>
                                <div className="searchPage__option">
                                    <ImageIcon />
                                    <Link to="/images">Images</Link>
                                </div>
                                <div className="searchPage__option">
                                    <LocalOfferIcon />
                                    <Link to="/shopping">shopping</Link>
                                </div>
                                <div className="searchPage__option">
                                    <RoomIcon />
                                    <Link to="/maps">maps</Link>
                                </div>
                                <div className="searchPage__option">
                                    <MoreVertIcon />
                                    <Link to="/more">more</Link>
                                </div>
                            </div>
                            {/* End of Icon List - Left */}


                            <div className="optionsRight">
                                <div className="searchPage__option">
                                    <Link to="/settings">Settings</Link>
                                </div>
                                <div className="searchPage__option">
                                    <Link to="/tools">Tools</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {true && (
                    <div className="searchPage__results">
                        <p className="resultCount">
                            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                        </p>

                        {data?.items.map(item => (
                            <div className="searchPage__result">
                                <a href={item.link}>
                                    {item.displayLink} 
                                </a>

                                <a href={item.link} className="searchPage__result Title">
                                    <h2>{item.title}</h2>
                                </a>

                                <p className="searchPage__result Snippet">
                                    {item.snippet}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default SearchPage;

