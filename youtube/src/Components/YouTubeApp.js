
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import Selection from './Selection.js';
import youtubeAPI from '../API/youtubeAPI.js';










const YouTubeApp = (props) => {
    const [vidList, setSearchList] = useState(null);
    const [vidList2, setSearchList2] = useState(null);
    const [currentVid, setCurrent] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [allComments, setComments] = useState(null);

    const addComment = comment => {
        const newComments = [...allComments, {comment} ]
        setComments(newComments);
    }

    const addCurrent = video => {
        console.log("add current video hit with "+video.snippet.title);
        setCurrent(video);
    }


    const addSearchTerm = text => {
        
        setSearchTerm(text);
        getResponse(text);
        setCurrent(null);
    };

    const getVidList = () => {  
        return vidList;
    }

    const getVidList2 = () => {
        return vidList2;
    }
    
    const getResponse = async (searchTerm) => {
        console.log("getResponse hit", "search term ="+searchTerm);
        const KEY = process.env.REACT_APP_YOUTUBE_KEY;
        const response = await youtubeAPI.get('search?', {
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 8,
                order: 'relevance',
                key: KEY
            }
        })
        
        setSearchList({
            vidList: Array.from(response.data.items)
            
            
        })

        if(response.data.items){
            fullVideoInfoArray(response.data.items);
        }
        
     

    };

    const fullVideoInfoArray = async (videos) => {
        console.log(videos);
        let newArr = [];
        for(let i = 0 ; i < videos.length ; i++){
            let vidId = videos[i].id;
            let response =  await getResponse2(vidId);
            console.log(response);
            newArr.push(response.items[0]);
        }
        console.log(newArr);

        setSearchList2({
            vidList2: newArr
            
        })

    }

    const getResponse2 = async (videoId) => {

        const KEY = process.env.REACT_APP_YOUTUBE_KEY;
        const response = await youtubeAPI.get('videos?', {
            params: {
                id: videoId.videoId,
                part: 'snippet, statistics',
                key: KEY
            }
        })   
        return response.data;
     
    };

    return (
        <div>
            <SearchBar setList={() => setSearchList} addSearchTerm={addSearchTerm}/>
            <div className="spacer"></div>
            
            {currentVid === null &&
                <Results vidList={getVidList2()} addCurrent={addCurrent}/>                       
            }
            {currentVid !== null &&
                <Selection currentVid={currentVid} vidList={vidList2} addCurrent={addCurrent}/>
            }
            
            
        </div>

    )


}


















export default YouTubeApp;