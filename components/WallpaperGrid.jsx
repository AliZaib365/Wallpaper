'use client';

const WallpaperGrid = ({ wallpapers }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {wallpapers.map((item, index) => (
        <div key={index} className="relative overflow-hidden rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <video
            src={item.media}
            controls
            className="w-full h-64 object-cover rounded-xl transition-all duration-300 transform hover:scale-105"
            preload="metadata"
          />
        </div>
      ))}
    </div>
  );
};

export default WallpaperGrid;
