import React from 'react';

const VideoResult = (props) => {

    return (
        <div className="resultContainer">
            <div className="thumbNail"></div>
            <div className="videoResultInfo">
                <span className="vid-result-title spanblock"> Video Title</span>

                <span className="vid-result-under spanblock"> channel &#8226; views &#8226; released </span>

                <span className="vid-result-under spanblock"> Breif video description placeholder HERE!</span>
            </div>
        </div>
    )
}

export default VideoResult;