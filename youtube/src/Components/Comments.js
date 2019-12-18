import React from 'react';
import Comment from './Comment.js';

const Comments = (props) => {

    const getCount = () => {
        let count = props.comments.length + props.allReplies.length;
        return count;
    }


    const renderItems = (arr) => {
       
        if(arr){
            arr.reverse();
            return (
                
                arr.map((comment) => {
                   
                    return (<Comment vote={props.vote} addComment={props.addComment} currentComment={comment} key={comment.id} allReplies={props.allReplies} video={props.video}/>

            )}))}
        else{
            return <h2>No Comments on this video!</h2>
        }
    }


    return (
        <div className="comments-container">
            
            <div> <h2>Comments ({getCount()})</h2></div>
            
            {renderItems(props.comments)}
        </div>
    )
}

export default Comments;