// Import necessary hooks from React
import { useState, useRef, useEffect } from 'react';

// Define the base path for the videos
const videoPath = '../../../public/Home/';

// Define the list of videos
const videos = [
  `${videoPath}ModelVideo.mp4`,
  `${videoPath}ModelVideo1.mp4`,
  `${videoPath}ModelVideo2.mp4`,
];

// Define the PrincipalVideo component
export const PrincipalVideo: React.FC = (): JSX.Element => {
  // Define a state variable for the current video index
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Define a ref for the video element
  const videoRef = useRef<HTMLVideoElement>(null);

  // Define a function to handle the end of a video
  const handleVideoEnd = () => {
    // When a video ends, move to the next video in the list
    setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
  };

  // Use an effect to load the new video when the current video index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentVideoIndex]);

  // Render the component
  return (
    <div className="relative  w-screen h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-screen h-[100%] object-cover"
        src={videos[currentVideoIndex]}
        autoPlay
        muted
        onEnded={handleVideoEnd}
      />
      <div className="relative z-40 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-5xl italic font-bold text-white">Under construction ...</h1>
      </div>
    </div>
  );
};
