'use client';

import { useEffect, useRef, useState } from 'react';

const WallpaperGrid = ({ wallpapers }) => {
  const [loaded, setLoaded] = useState([]); // Tracks loaded images
  const videoRefs = useRef([]); // Store references to video elements
  const [loadingIndex, setLoadingIndex] = useState(10); // Index for sequential loading

  // Function to clean and format the wallpaper name
  const formatName = (name) => {
    if (!name) return 'Live Wallpaper';
    return name
      .replace(/[^a-zA-Z0-9 .,!?-]/g, '') // Remove unwanted characters
      .replace(/\s{2,}/g, ' ') // Remove extra spaces
      .trim();
  };

  // Function to check if an image is in the viewport (to trigger loading)
  const checkViewport = (index) => {
    const video = videoRefs.current[index];
    const rect = video.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  };

  // Effect to load images sequentially and start playing once in the viewport
  useEffect(() => {
    const loadNextImage = () => {
      // Check for next image to load
      for (let i = loadingIndex; i < wallpapers.length; i++) {
        if (checkViewport(i)) {
          setLoaded((prev) => [...prev, i]); // Mark image as loaded
          setLoadingIndex(i + 1); // Set next image to load
        }
      }
    };

    // Listen to scroll events to load images sequentially
    const onScroll = () => loadNextImage();
    window.addEventListener('scroll', onScroll);

    // Initially load first 10 images
    for (let i = 0; i < 10; i++) {
      setLoaded((prev) => [...prev, i]);
    }

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [loadingIndex, wallpapers]);

  // Handle video play when mouse enters
  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play(); // Start playing video on hover
    }
  };

  // Handle video pause when mouse leaves
  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause(); // Pause video on mouse leave
      video.currentTime = 0; // Reset video to the start
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {wallpapers.map((item, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
        >
          {/* Video element with sequential lazy loading */}
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={index < 10 || loaded.includes(index) ? item.media : null} // Load first 10 images instantly
            muted
            loop
            playsInline
            autoPlay={false} // Set to false to avoid autoplay initially
            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            preload="auto" // Preload the video to make sure it's ready to play instantly
            style={{ opacity: loaded.includes(index) || index < 10 ? 1 : 0 }} // Fade-in effect when loaded
            onCanPlay={(e) => e.target.play()} // Automatically play when video is ready
            onMouseEnter={() => handleMouseEnter(index)} // Play on hover
            onMouseLeave={() => handleMouseLeave(index)} // Pause on hover leave
          />

          {/* Name overlay - only shows on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <h3 className="text-white font-medium text-sm md:text-base truncate">
              {formatName(item.name)}
            </h3>
          </div>

          {/* Loading indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WallpaperGrid;
