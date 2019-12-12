import React from 'react';
import youtubeLogo2 from '../Images/youtubeLogo2.jpg';

const SearchBar = (props) => {

    return (
        <div className="mx-auto sticky ">
            <div className="row padz">
                <div className="col-md-2">
                    <div className="logoDiv">
                        <img className="logoImg" src={youtubeLogo2} alt='logo2'/>
                    </div>
                </div>
                
                <div className="col-md-8">
                    {/* <div className="spacer">

                    </div> */}
                    <div className="searchDiv">
                        <form>
                            <input className="searchInput "type="text" name="search" placeholder="Search..."></input>
                            <button className="searchButton" type="submit" >Search</button>
                        </form>
                    </div>
                </div>

                <div className="col-md-1">
                    <span>YouTube React Clone <br/>by Alex Hardy</span>
                </div>

            </div>
            
        </div>
    )
}

export default SearchBar;