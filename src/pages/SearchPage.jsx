import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../components/StateProvider'

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();

    return (
        <div>
            <div className="searchPage">
                <div className="searchPage__header">
                    <h1>{term}</h1>
                </div>

                <div className="searchPage__results">

                </div>
            </div>
        </div>
    )
}

export default SearchPage;
