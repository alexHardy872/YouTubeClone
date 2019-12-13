import React from 'react';
import Comment from './Comment.js';

const Comments = (props) => {


    const renderItems = (arr) => {
       
        if(arr){
            return (
                props.comments.map((comment) => {
                    return <Comment currentComment={comment} key={comment.id} allReplies={props.allReplies}/>
                    }))}
        else{
            return <h2>No Comments on this video!</h2>
        }
    }


    return (
        <div>
            <h1> Comments Here!</h1>
            {renderItems(props.comments)}
        </div>
    )
}

export default Comments;