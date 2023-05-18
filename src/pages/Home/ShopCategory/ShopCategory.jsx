import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Teddy from "../../Teddy/Teddy";

const ShopCategory = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Stuffed Animal");
  console.log(toys);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          const filter = data.filter((toy) => toy.subCategory == category);
          setToys(filter);
        }
      });
  }, [category]);
  return (
    <div className="mt-5 mb-5">
      <h2 className="text-center text-3xl font-bold">Our Special Category</h2>
      <Tabs className="text-center">
        <TabList className="gap-4">
          <Tab onClick={() => setCategory("Stuffed animal cat")}>
            Stuffed animal cat
          </Tab>
          <Tab onClick={() => setCategory("Bird Toy")}>Bird Toy</Tab>
          <Tab onClick={() => setCategory("Fish toy")}>Fish toy</Tab>
        </TabList>

        <TabPanel>
          <div className="md:flex lg:flex">
            {toys.map((toy) => (
              <Teddy key={toy.name} toy={toy}></Teddy>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          {toys.map((toy) => (
            <Teddy key={toy.name} toy={toy}></Teddy>
          ))}
        </TabPanel>
        <TabPanel>
          {toys.map((toy) => (
            <Teddy key={toy.name} toy={toy}></Teddy>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
