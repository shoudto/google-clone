import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import SearchBar from '../components/SearchBar';

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    {/* Setting up two links here */}
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>

                <div className="home__headerRight">
                    {/* Setting up two links here, icon, and avatar */}
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>

            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google_logo"/>

                <div className="searchInput">
                    {/* Adding a search bar */}
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default Home
