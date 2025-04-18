import WallpaperGrid from '../../components/WallpaperGrid';

const AnimalsPage = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_WALLPAPER_API_ANIMALS, {
    cache: 'no-store',
  });

  const data = await res.json();
  const wallpapers = data.categories;

  return (
    <WallpaperGrid wallpapers={wallpapers} />
  );
};

export default AnimalsPage;
