import React from 'react';
import youtubeLogo2 from '../Images/youtubeLogo2.jpg';

const SearchBar = (props) => {

    return (
        <div className="red mx-auto">
            <div className="row naver">
                <div className="col-md-3">
                    <div className="logoDiv">
                        <img className="logoImg" src={youtubeLogo2} alt='logo2'/>
                    </div>
                </div>
                
                <div className="col-md-8">
                    <div className="searchDiv">
                    <input className="searchInput "type="text" name="search" placeholder="Search..."></input>

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default SearchBar;