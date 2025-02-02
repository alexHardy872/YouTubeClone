
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.js';
import Results from './Results.js';
import Selection from './Selection.js';
import youtubeAPI from '../API/youtubeAPI.js';
import axios from 'axios';










const YouTubeApp = (props) => {
    useEffect(() => {
        console.log("use effect YT");
        getComments();
    },[]);
   
    const [vidList, setSearchList] = useState(null);
    const [vidList2, setSearchList2] = useState(null);
    const [currentVid, setCurrent] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [allComments, setComments] = useState(null);
    const [,forceUpdate] = useState(0);
    
   const getComments = () => {
    console.log("get comments");
        axios.get('http://localhost:3000/collections')
        .then((response) =>  {
            setComments(response.data)    
        })
    }

    const findIndex = (arr, comment) => {
        for(let i = 0; i< arr.length; i++){
            if (arr[i].id == comment.id){
                return i;
            }
        }
        return -1;
    }

    const changeLikes = (comment, likeOrDislike, isReply) => {
        let Comments = allComments;
        if(isReply==true){
            let indexOfReply = findIndex(Comments.replies, comment);
            if(likeOrDislike === "up"){
                Comments.replies[indexOfReply].likes+=1;
            }
            else{
                Comments.replies[indexOfReply].dislikes+=1;
            }
        }
        else{
            let indexOfComment = findIndex(Comments.comments, comment);
            if(likeOrDislike === "up"){
                Comments.comments[indexOfComment].likes+=1;
            }
            else{
                Comments.comments[indexOfComment].dislikes+=1;
            }
        }
        axios.put('http://localhost:3000/collections',{
            comments: Comments.comments,
            replies: Comments.replies
        }).then((response) => {
           console.log("get comments from promise?")
           getComments();          
        })     
    }

    const addComment = (comment, isReply, isReplyToReply, responseTo, videoId = "0") => {
       
        const Comments = allComments;
        if(isReply === true){
            let newId = Comments.replies.length+1;
            let newReply = {
                id: newId,
                replyToReply: false,
                parentId: responseTo,
                videoId: videoId,
                content: comment,
                likes: 0,
                dislikes: 0
            }

            if(isReplyToReply === true){
                
                newReply.replyToReply = true;       
            }
            Comments.replies.push(newReply);
         
        }
        else{   
            let newId = Comments.comments.length+1;
            let newComment = {
                id: newId,
                videoId: responseTo,
                content: comment,
                likes: 0,
                doslike: 0
            }
            Comments.comments.push(newComment);
        }       
        axios.put('http://localhost:3000/collections',{
            comments: Comments.comments,
            replies: Comments.replies
        }).then((response) => {
           console.log("get comments from promise?")
           getComments();
            
        })
    }

   


    const addCurrent = video => {
        setCurrent(video);
    }


    const addSearchTerm = text => {
        
        setSearchTerm(text);
        getResponse(text);
        setCurrent(null);
    };

    const getVidList = () => {  
        return vidList;
    }

    const getVidList2 = () => {
        return vidList2;
    }
    
    const getResponse = async (searchTerm) => {
        //console.log("getResponse hit", "search term ="+searchTerm);
        const KEY = process.env.REACT_APP_YOUTUBE_KEY;
        const response = await youtubeAPI.get('search?', {
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 8,
                order: 'relevance',
                key: KEY,
                type: 'video'
            }
        })
        
        setSearchList({
            vidList: Array.from(response.data.items)
            
            
        })

        if(response.data.items){
            fullVideoInfoArray(response.data.items);
        }
        
     

    };

    const fullVideoInfoArray = async (videos) => {
        //console.log(videos);
        let newArr = [];
        for(let i = 0 ; i < videos.length ; i++){
            let vidId = videos[i].id;
            let response =  await getResponse2(vidId);
            //console.log(response);
            newArr.push(response.items[0]);
        }
        //console.log(newArr);

        setSearchList2({
            vidList2: newArr
            
        })

    }

    const getResponse2 = async (videoId) => {

        const KEY = process.env.REACT_APP_YOUTUBE_KEY;
        const response = await youtubeAPI.get('videos?', {
            params: {
                id: videoId.videoId,
                part: 'snippet, statistics',
                key: KEY
            }
        })   
        return response.data;
     
    };

    return (
        <div>
            <SearchBar setList={() => setSearchList} addSearchTerm={addSearchTerm}/>
            <div className="spacer"></div>
            
            {currentVid === null &&
                <Results vidList={getVidList2()} addCurrent={addCurrent}/>                       
            }
            {currentVid !== null &&
                <Selection vote={changeLikes} comments={allComments} addComment={addComment} currentVid={currentVid} vidList={vidList2} addCurrent={addCurrent}/>
            }
            
            
        </div>

    )


}


















export default YouTubeApp;