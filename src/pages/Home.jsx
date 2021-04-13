import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";

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
                </div>
            </div>

            <div className="home__body">

            </div>
        </div>
    )
}

export default Home
