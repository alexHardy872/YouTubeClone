import React, { useState, useEffect } from 'react';
import ReplyForm from './ReplyForm';
import { checkPropTypes } from 'prop-types';
import profile from '../Images/profile.jpg';
import up from '../Images/up.png';
import down from '../Images/down.png';


const Comment = (props) => {

    // useEffect(() => {
    //     findReplies();
    // },[]);
    // const [directReplies, filterComments] = useState(null);

    const scoreComment = (comment) => {
        return comment.likes - comment.dislikes;
    }


    const findReplies = () => {
        
        
        const Thesecomments = props.allReplies.filter((reply) => reply.replyToReply == false && reply.parentId == props.currentComment.id);
        //filterComments(Thesecomments);
        return Thesecomments;
    }

    const renderItems = (arr) => {
       
        if(arr){
            return (
                arr.map((reply) => {
                
                return (<div className="reply red reply-div"> 
                <div className="like-buttons">
                    <div className='arrow-container'>
                    <img onClick={() => props.vote(reply,"up",true)} className='arrow' src={up} alt='upvote'/>
                    </div>
                    <div className='num-container'>
                        <span>{scoreComment(reply)}</span>
                    </div>
                    <div className='arrow-container'>
                    <img onClick={() => props.vote(reply,"down",true)} className='arrow' src={down} alt='downvote'/>
                    </div>
                    
                    
                </div>  
                <img className='comment-image' src={profile} alt="user"/>
                {reply.content} <ReplyForm response={reply.id} key={reply.id} replyToReply={true} addComment={props.addComment} video={props.video}/></div>
                    )}))}
        else{
            return <h2>No replies on this video!</h2>
        }
    }

    return (
        <div  className="comment-wrapper">
            <div className="blue comment-div">
                <div className="like-buttons">
                    <div className='arrow-container'>
                    <img onClick={() => props.vote(props.currentComment,"up",false)} className='arrow' src={up} alt='upvote'/>
                    </div>
                    <div className='num-container'>
                        <span>{scoreComment(props.currentComment)}</span>
                    </div>
                    <div className='arrow-container'>
                    <img onClick={() => props.vote(props.currentComment,"down",false)} className='arrow' src={down} alt='downvote'/>
                    </div>
                    
                    
                </div>
                <img className='comment-image' src={profile} alt="user"/>
                {props.currentComment.content}
            <ReplyForm addComment={props.addComment} response={props.currentComment.id} replyToReply={false} video={props.video}/>
            </div>
            <div className="reply-container">
                {renderItems(findReplies())}
            </div>
        </div>
    )
}

export default Comment;