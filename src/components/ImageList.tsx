import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";

const getImageFileNames = () => {
  const imagesDirectory = path.join(process.cwd(), "public/images");
  const fileNames = fs.readdirSync(imagesDirectory);
  return fileNames;
};

const getImageCount = () => {
  const imageFileNames = getImageFileNames();
  return imageFileNames.length;
};

const ImageList = () => {
  const imageFileNames = getImageFileNames();
  const imageCount = getImageCount();

  return (
    <>
      <h2 className="mt-32 mb-16 text-xl">
        Number of doggy images: {imageCount}
      </h2>
      <ul className="grid mb-32 w-full grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {imageFileNames.map((fileName) => (
          <li className="relative" key={fileName}>
            <div className="aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <Image
                className="pointer-events-none object-contain group-hover:opacity-75"
                fill
                src={`/images/${fileName}`}
                alt={fileName}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageList;
