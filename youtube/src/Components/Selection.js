import React, { useState, useEffect } from 'react';
import SideResults from './SideResults.js';
import CommentForm from './CommentForm.js';
import Comments from './Comments.js';

const Selection = (props) => {
    // useEffect(() => {
    //     console.log("find comments");
    //     findCurrentComments();
      

    // },[]);

    //const [currentComments, filterComments] = useState(null);


    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

   

    const findCurrentComments = () => {
        const Thesecomments = props.comments.comments.filter((comment) => comment.videoId === props.currentVid.id);
       // filterComments(Thesecomments);
       return Thesecomments;
    }

    const findCurrentReplies = () => {
        const replies = props.comments.replies.filter((reply) => reply.videoId === props.currentVid.id);
        return replies;
    }
   

    return (
        <div className="container-fluid pad bg-gray tall">
            <div className="row">
                <div className="col-sm-1"> </div>
                <div className="col-lg-7">
                    <div className="video-container">
                    <iframe 
                        width="840"
                        height="480" 
                        src={'https://www.youtube.com/embed/'+props.currentVid.id}
                        frameBorder="5"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                      <div className="videoInfo">
                          
                        <span className="vid-result-title spanblock">{props.currentVid.snippet.title}</span>

                        <span className="vid-result-under spanblock"> 
                            {props.currentVid.snippet.channelTitle}
                            &#8226; {props.currentVid.statistics.viewCount} views &#8226; 
                            {formatDate(props.currentVid.snippet.publishedAt)} </span>

    <span className="vid-result-under spanblock"> {props.currentVid.statistics.likeCount} likes &#8226; {props.currentVid.statistics.dislikeCount} dislikes (buttons) </span>

                            <div className="description-block-full">
                                     <span className="vid-result-under spanblock"> {props.currentVid.snippet.description}</span>
                            </div>
                      </div>
                      </div>

                      <div>
                          
                          <CommentForm addComment={props.addComment} video={props.currentVid}/>
                          <Comments vote={props.vote} comments={findCurrentComments()} allReplies={findCurrentReplies()} addComment={props.addComment} video={props.currentVid}/>
                      </div>
                </div>
                <div className="col-sm-3">
                        <h2> related videos playlist?</h2>
                        <SideResults vidList={props.vidList}  addCurrent={props.addCurrent} />
                </div>
                <div className="col-sm-1"></div>
            </div>
        </div>


    )
}

export default Selection;