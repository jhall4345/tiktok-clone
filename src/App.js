import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className='app_videos'>
      <Video url="https://player.vimeo.com/external/468821581.sd.mp4?s=126b63ceb0c2977cac6e6b98da38f1a68ae17e94&profile_id=165&oauth2_token_id=57447761" 
      channel="ssssahdna"
      description="this is the description"
      song="React tunes"
      likes={111}
      messages={222}
      shares={333}
      />
      <Video url="https://player.vimeo.com/external/468821581.sd.mp4?s=126b63ceb0c2977cac6e6b98da38f1a68ae17e94&profile_id=165&oauth2_token_id=57447761" 
      channel="ssssahdna"
      description="this is the description"
      song="React tunes"
      likes={111}
      messages={222}
      shares={333}
      />
      </div>
    </div>
  );
}

export default App;
