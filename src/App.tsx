// App.js
import React from 'react';
import Tweet from './tweet';
import { tweetsData } from './data';

/* Do not write your tweet component here, write it in the tweet.tsx file */

function App() {
  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <div className="feed">
        {tweetsData.map((element)=> (
          <Tweet id={element.id} username={element.username} content={element.content} likes={element.likes} timestamp={element.timestamp}/>
        ))}
      </div>
    </div>
  );
}

export default App;
