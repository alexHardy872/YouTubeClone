import React from 'react';

const CommentForm = (props) => {
    

    const handleSubmit = e => {
        e.preventDefault();
        if(!e.target[0].value) return;
        props.addComment(e.target[0].value, false, false, e.target[1].value);
        e.target[0].value = "";
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='content'></input>
                <input type='hidden' value={props.video.id}/>
                <button type='submit'>POST COMMENT</button>
            </form>
        
        </div>
    )
}

export default CommentForm;