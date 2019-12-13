import React from 'react';
import VideoResultSmall from './VideoResultSmall.js';




const SideResults = (props) => {

    const renderItems = (arr) => {      
        if(arr){
            return (
                props.vidList.vidList2.map((video) => {
                    return <VideoResultSmall addCurrent={props.addCurrent} video={video} key={video.id.videoId}/>
                    })) }
        else{
            return <h2>Search to populate the list!</h2>
        }
    }


    return (
        <div>
            {renderItems(props.vidList)}
        </div>
            
    )
}

export default SideResults;