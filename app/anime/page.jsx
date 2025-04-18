import WallpaperGrid from '../../components/WallpaperGrid';

const AnimePage = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_WALLPAPER_API_ANIME, {
    cache: 'no-store',
  });

  const data = await res.json();
  const wallpapers = data.categories;

  return <WallpaperGrid wallpapers={wallpapers} />;
};

export default AnimePage;
