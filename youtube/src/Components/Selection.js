import React from 'react';

const Selection = (props) => {

    return (
        <div className="container-fluid pad bg-gray tall">
            <div className="row">
                <div className="col-sm-1"> </div>
                <div className="col-lg-7">
                    <div className="video-container">
                    <iframe 
                        width="840"
                        height="480" 
                        src="https://www.youtube.com/embed/hoSjc6brOIg" 
                        frameborder="5"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                      ></iframe>
                      <div className="videoInfo">
                          
                            <span className="vid-result-title spanblock"> Full Video Title</span>

                            <span className="vid-result-under spanblock"> views &#8226; released </span>
                            <span className="vid-result-under spanblock"> likes &#8226; dislikes (buttons) </span>
                      </div>
                      </div>

                      <div>
                          <h2> Comments</h2>
                      </div>
                </div>
                <div className="col-sm-3">
                        <h2> related videos playlist?</h2>
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>


    )
}

export default Selection;