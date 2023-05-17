import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const images = [
  "https://imgtr.ee/images/2023/05/17/vjXz0.jpg",
  //...
  "https://imgtr.ee/images/2023/05/17/v3G6m.jpg",
  "https://imgtr.ee/images/2023/05/17/v3MFU.jpg",
  "https://imgtr.ee/images/2023/05/17/v3RUB.jpg",
  "https://imgtr.ee/images/2023/05/17/v3oTQ.jpg",
  "https://imgtr.ee/images/2023/05/17/v3UMI.jpg",
  "https://imgtr.ee/images/2023/05/17/v3gpn.jpg",
  "https://imgtr.ee/images/2023/05/17/vPGXY.jpg",
  "https://imgtr.ee/images/2023/05/17/vPUZ4.jpg",
];

const Gallery = () => {
  return (
    <div>
      <h2 className="text-center text-orange-700 font-bold text-4xl">
        Our Gallery
      </h2>
      <div className="mt-6 bg-orange-300">
        <Masonry columnsCount={3} gutter="15px p-5">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              style={{ width: "100%", display: "block" }}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Gallery;
