import React, { useState } from 'react';
import youtubeLogo2 from '../Images/youtubeLogo2.jpg';

const SearchBar = (props) => {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        props.addSearchTerm(value);


    }

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
                        <form onSubmit={handleSubmit}>
                            <input className="searchInput "type="text" name="search" placeholder="Search..." value={value} onChange={e => setValue(e.target.value)}></input>
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