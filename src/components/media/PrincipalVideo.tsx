// Import necessary hooks from React
import { useState, useRef, useEffect } from 'react';

// Define the base path for the videos
const videoPath = '/Home/';

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

      <div className="relative border-b-[1px] w-screen h-screen overflow-hidden">
          <video
            ref={videoRef}
            className="w-screen h-[100%] object-cover"
            src={videos[currentVideoIndex]}
            autoPlay
            muted
            onEnded={handleVideoEnd}
          />
      </div>
  );
};
