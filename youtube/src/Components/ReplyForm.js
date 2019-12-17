import React from 'react';

const ReplyForm = (props) => {

    const handleSubmit = e => {
       
        e.preventDefault();
        if(!e.target[0].value) return;
        props.addComment(e.target[0].value, true, e.target[2].value, e.target[1].value, e.target[3].value);
        e.target[0].value = "";

    }

  

    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input type='text' name='content'></input>
                <input type='hidden' value={props.response}/>
                <input type='hidden' value={props.replyToReply}/>
                <input type='hidden' value={props.video.id}/>
                <button type='submit'>REPLY</button>
            </form>
        </div>
    )
}

export default ReplyForm;