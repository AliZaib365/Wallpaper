// app/allwallpapers/page.jsx
'use client';

import { useEffect, useState } from 'react';

const AllWallpapersPage = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWallpapers = async () => {
      try {
        const responses = await Promise.all([
          fetch(process.env.NEXT_PUBLIC_WALLPAPER_API_ANIMALS),
          fetch(process.env.NEXT_PUBLIC_WALLPAPER_API_ANIME),
          fetch(process.env.NEXT_PUBLIC_WALLPAPER_API_ABSTRACT),
        ]);

        const data = await Promise.all(responses.map((res) => res.json()));

        const allWallpapers = data.reduce((acc, curr) => {
          if (curr.categories) {
            acc.push(...curr.categories);
          }
          return acc;
        }, []);

        setWallpapers(allWallpapers);
      } catch (err) {
        console.error('Error fetching wallpapers:', err);
        setError('Failed to load wallpapers');
      }
    };

    fetchWallpapers();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center mt-8">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-8 text-center">All Wallpapers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wallpapers.map((wallpaper, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <video
              src={wallpaper.media}
              controls
              className="w-full h-56 object-cover"
              preload="metadata"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllWallpapersPage;
