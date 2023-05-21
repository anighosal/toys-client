import React from "react";
import Masonry from "react-responsive-masonry";
const images = [
  "https://imgtr.ee/images/2023/05/17/vjXz0.jpg",
  "https://imgtr.ee/images/2023/05/17/v3G6m.jpg",
  "https://imgtr.ee/images/2023/05/17/v3MFU.jpg",
  "https://imgtr.ee/images/2023/05/17/v3RUB.jpg",
  "https://imgtr.ee/images/2023/05/17/v3oTQ.jpg",
  "https://imgtr.ee/images/2023/05/17/v3UMI.jpg",
];

const Gallery = () => {
  return (
    <div className="bg-orange-300 mt-8">
      <h2
        className="text-center text-white font-bold text-4xl"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        Our Gallery
      </h2>
      <div className="mt-6 ">
        <Masonry columnsCount={3} gutter="15px">
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
