import React from 'react';

interface VideoPlayerProps {
  src: string;
  width: number | string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width }) => {
  return (
    <video
      autoPlay
      loop
      muted
      style={{ width }}
      playsInline
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
