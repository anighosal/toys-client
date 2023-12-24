import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Teddy from "../../Teddy/Teddy";
import Aos from "aos";
import "aos/dist/aos.css";

// fetch(`https://my-toy.vercel.app/category?category=${category}`)

const ShopCategory = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Stuffed Animal");
  console.log(toys);
  useEffect(() => {
    fetch(`https://my-toy.vercel.app/category?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length) {
          setToys(data);
        }
      });
  }, [category]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="mt-5 mb-5 ">
      <h2
        className="text-center text-3xl font-bold text-white"
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        Our Special Category
      </h2>
      <Tabs className="text-center mt-8 ">
        <TabList className="gap-10">
          <Tab onClick={() => setCategory("Stuffed Animal")}>
            <h2 className="text-2xl font-bold ">
              Stuffed animal cat
            </h2>
          </Tab>
          <Tab onClick={() => setCategory("Bird Toy")}>
            <h2 className="text-2xl font-bold">Bird Toy</h2>
          </Tab>
          <Tab onClick={() => setCategory("Reptile toy")}>
            <h2 className="text-2xl font-bold">Fish toy</h2>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {toys.slice(0, 3).map((toy) => (
              <Teddy key={toy.name} toy={toy}></Teddy>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {toys.map((toy) => (
              <Teddy key={toy.name} toy={toy}></Teddy>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {toys.map((toy) => (
              <Teddy key={toy.name} toy={toy}></Teddy>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
