// Tweet.js
import React, { useState } from 'react';
import type { Tweets } from './App';
/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

function Tweet({id, username, content, likes, timestamp}: Tweets){
    const[likeCount, setLikeCount] = useState(likes);
    const[liked, setLiked] = useState(false);

    const handleLike = () =>{
        if(!liked){
            setLiked(true);
            setLikeCount(likeCount + 1);
        }else{
            setLiked(false);
            setLikeCount(likeCount - 1);
        }
    };

    return(
        <div className = "tweet">
            <h4>@{username}</h4>
            <p>{content}</p>
            <p><small>{timestamp} ago</small></p>
            <button onClick = {handleLike}>
                {liked ? "❤️" : "🤍"} {likeCount} Like{likeCount === 1 ? "" : "s"}
            </button>
        </div>
    );
}

export default Tweet;
