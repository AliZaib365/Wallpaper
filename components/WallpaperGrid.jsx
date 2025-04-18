'use client';

const WallpaperGrid = ({ wallpapers }) => {
  // Function to clean and format the wallpaper name
  const formatName = (name) => {
    if (!name) return 'Live Wallpaper';
    
    // Remove special characters but keep spaces and basic punctuation
    return name
      .replace(/[^a-zA-Z0-9 .,!?-]/g, '') // Keep basic punctuation
      .replace(/\s{2,}/g, ' ') // Remove extra spaces
      .trim();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {wallpapers.map((item, index) => (
        <div 
          key={index} 
          className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
        >
          {/* Video element */}
          <video
            src={item.media}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            preload="auto"
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => {
              e.target.pause();
              e.target.currentTime = 0;
            }}
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