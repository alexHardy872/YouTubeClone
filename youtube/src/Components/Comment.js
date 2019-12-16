import React, { useState, useEffect } from 'react';
import ReplyForm from './ReplyForm';
import { checkPropTypes } from 'prop-types';

const Comment = (props) => {

    useEffect(() => {
        findReplies();
    },[]);
    const [directReplies, filterComments] = useState(null);


    const findReplies = () => {
        
        const Thesecomments = props.allReplies.filter((reply) => reply.replyToReply === false && reply.parentId === props.currentComment.id);
        filterComments(Thesecomments);
    }

    const renderItems = (arr) => {
       
        if(arr){
            return (
                directReplies.map((reply) => {
                    return (<div className="reply red"> {reply.content} <ReplyForm response={reply.id} key={reply.id} replyToReply="true" addComment={props.addComment}/></div>
                    )}))}
        else{
            return <h2>No replies on this video!</h2>
        }
    }

    return (
        <div >
            <div>{props.currentComment.content}</div>
            <ReplyForm addComment={props.addComment} response={props.currentComment.Id} replyToReply="false"/>
            <div className="reply-container">
                {renderItems(directReplies)}
            </div>
        </div>
    )
}

export default Comment;