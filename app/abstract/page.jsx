import WallpaperGrid from '../../components/WallpaperGrid';

const AbstractPage = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_WALLPAPER_API_ABSTRACT, {
    cache: 'no-store',
  });

  const data = await res.json();
  const wallpapers = data.categories;

  return <WallpaperGrid wallpapers={wallpapers} />;
};

export default AbstractPage;
