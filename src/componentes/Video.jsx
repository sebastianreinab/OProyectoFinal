// src/components/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

const Video= ({ videoUrl }) => {
  return (
    <div className="video-player">
      <ReactPlayer url={videoUrl} controls width="600px" />
    </div>
  );
}

export default Video
