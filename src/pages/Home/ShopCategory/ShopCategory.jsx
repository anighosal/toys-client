import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Teddy from "../../Teddy/Teddy";

const ShopCategory = () => {
  return (
    <div className="mt-5 mb-5">
      <h2 className="text-center text-3xl font-bold">Our Special Category</h2>
      <Tabs className="text-center">
        <TabList className="gap-4">
          <Tab>Teddy Bear</Tab>
          <Tab>Dogs</Tab>
          <Tab>Cat</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
          <Teddy></Teddy>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
