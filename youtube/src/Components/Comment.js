import React, { useState, useEffect } from 'react';
import ReplyForm from './ReplyForm';
import { checkPropTypes } from 'prop-types';

const Comment = (props) => {

    // useEffect(() => {
    //     findReplies();
    // },[]);
    // const [directReplies, filterComments] = useState(null);


    const findReplies = () => {
        
        
        const Thesecomments = props.allReplies.filter((reply) => reply.replyToReply == false && reply.parentId == props.currentComment.id);
        //filterComments(Thesecomments);
        return Thesecomments;
    }

    const renderItems = (arr) => {
       
        if(arr){
            return (
                arr.map((reply) => {
                    return (<div className="reply red"> {reply.content} <ReplyForm response={reply.id} key={reply.id} replyToReply={true} addComment={props.addComment} video={props.video}/></div>
                    )}))}
        else{
            return <h2>No replies on this video!</h2>
        }
    }

    return (
        <div  className="comment-wrapper">
            <div className="blue comment-div">{props.currentComment.content}</div>
            <ReplyForm addComment={props.addComment} response={props.currentComment.id} replyToReply={false} video={props.video}/>
            <div className="reply-container">
                {renderItems(findReplies())}
            </div>
        </div>
    )
}

export default Comment;