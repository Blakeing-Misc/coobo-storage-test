import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";

const getImageFileNames = () => {
  const imagesDirectory = path.join(process.cwd(), "public/images");
  const fileNames = fs.readdirSync(imagesDirectory);
  return fileNames;
};

const ImageList = () => {
  const imageFileNames = getImageFileNames();

  return (
    <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {imageFileNames.map((fileName) => (
        <li className="relative" key={fileName}>
          <div className="aspect-square block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Image
              className="pointer-events-none object-cover group-hover:opacity-75"
              fill
              src={`/images/${fileName}`}
              alt={fileName}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
