import React, { useState, useEffect } from 'react';
import ReplyForm from './ReplyForm';

const Comment = (props) => {

    useEffect(() => {
        findReplies();
    },[]);
    const [currentComments, filterComments] = useState(null);


    const findReplies = () => {
        const Thesecomments = props.comments.comments.filter((comment) => comment.videoId === props.currentVid.id);
        filterComments(Thesecomments);
    }

    return (
        <div>
            <h2>{props.currentComment.content}</h2>
            <ReplyForm/>
        </div>
    )
}

export default Comment;