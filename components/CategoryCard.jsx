'use client';

import Link from 'next/link';

const CategoryCard = ({ category }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <Link href={`/${category.name.toLowerCase()}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-md border border-white/10">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-semibold tracking-wide drop-shadow-lg">
              {category.name}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
