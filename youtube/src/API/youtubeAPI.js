import React from 'react';
import axios from 'axios';

const KEY = process.env.REACT_APP_YOUTUBE_KEY;
console.log(KEY+"from API Componenet");
export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
   
    }
})