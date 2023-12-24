import React from "react";
import "./Gallery.css";

const toys = [
  {
    name: "Cuddly Cat Plush",
    image: "https://i.ibb.co/FqJVtzg/819-V0r-Qft-HL.jpg",
    discount: 15,
  },
  {
    name: "Playful Dog Toy",
    image: "https://i.ibb.co/H2Bh3Z7/41-GZYs-Gw-Ni-L-AC-UF894-1000-QL80.jpg",
    discount: 10,
  },
  {
    name: "Cheerful Bunny Stuffed Animal",
    image: "https://i.ibb.co/8jL7kjm/download.jpg",
    discount: 20,
  },
];

const Gallery = () => {
  return (
    <div className="mt-8 lg:px-0 px-5">
      <div className="mt-6 shadow-xl rounded-lg card gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {toys.map((toy, i) => (
          <div
            key={i}
            className="gallery-card border border-gray-300 rounded-md overflow-hidden"
          >
            <div className="gallery-card border border-gray-300 rounded-md overflow-hidden">
              <div className="h-[300px] w-full rounded-md">
                <img
                  src={toy.image}
                  alt={toy.name}
                  className="card-image w-full h-full p-4"
                />
              </div>
              <div className="card-body flex flex-col justify-center p-4 text-white">
                <h3 className="toy-name">{toy.name}</h3>
                <p className="discount">Discount: {toy.discount}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
