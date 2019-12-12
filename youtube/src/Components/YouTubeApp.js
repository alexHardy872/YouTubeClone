import React from 'react';
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import Selection from './Selection.js'


const YouTubeApp = (props) => {

    return (
        <div>
            <SearchBar />
            <div className="spacer"></div>

            
            {/* <Results/> */}
            <Selection/>
        </div>

    )


}


















export default YouTubeApp;