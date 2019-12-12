
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import Selection from './Selection.js';
import youtubeAPI from '../API/youtubeAPI.js';










const YouTubeApp = (props) => {
    const [vidList, setSearchList] = useState(null);
    const [currentVid, setCurrent] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');


    
    const addSearchTerm = text => {
        
        setSearchTerm(text);
    }
    

    return (
        <div>
            <SearchBar setList={() => setSearchList} addSearchTerm={addSearchTerm}/>
            <div className="spacer"></div>
            

            
            <Results videoList={() => vidList} setCurrent={() => setCurrent}/> 
            {/* <Selection currentVid={currentVid}/> */}
        </div>

    )


}


















export default YouTubeApp;