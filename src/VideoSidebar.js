import React, { useState } from 'react';
import "./VideoSidebar.css";
import { Favorite } from '@mui/icons-material';
import { Message } from '@mui/icons-material';
import { Share } from '@mui/icons-material';
import { FavoriteBorder } from '@mui/icons-material';

function VideoSidebar({ likes, shares, messages}) {
const [liked, setLiked] = useState(false);

  return (
    <div className='videoSidebar'>
      <div className='videoSidebar_button'>
        {liked ? (
          <Favorite fontSize="large" onClick={(e) => setLiked(false)}/>
        ) : (
          <FavoriteBorder 
          fontSize="large"
          onClick={(e) => setLiked(true)}/>
        )}
        <p>{liked ? likes + 1: likes}</p>
        </div>
      <div className='videoSidebar_button'>
      <Message fontSize="large" />
      <p>{messages}</p>
      </div>
      <div className='videoSidebar_button'>
      <Share fontSize="large" />
      <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar