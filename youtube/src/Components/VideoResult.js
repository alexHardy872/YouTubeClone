import React from 'react';

const VideoResult = (props) => {

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    return (
        <div className="resultContainer">
            <div className="thumbNail" onClick={() => props.addCurrent(props.video)}>
                
                <img className="thumbnail-image" src={props.video.snippet.thumbnails.high.url} />
            </div>
            <div className="videoResultInfo">
                <span className="vid-result-title spanblock">{props.video.snippet.title}</span>

                <span className="vid-result-under spanblock"> 
                        {props.video.snippet.channelTitle}
                        &#8226; {props.video.statistics.viewCount} views &#8226; 
                        {formatDate(props.video.snippet.publishedAt)} </span>
                <div className="description-block">
                    <span className="vid-result-under spanblock"> {props.video.snippet.description}</span>
                </div>
                
            </div>
        </div>
    )
}

export default VideoResult;