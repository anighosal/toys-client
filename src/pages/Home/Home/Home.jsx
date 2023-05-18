import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import CustomerView from "../CustomerView/CustomerView";
import PlayGround from "../PlayGround/PlayGround";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
      <CustomerView></CustomerView>
      <PlayGround></PlayGround>
    </div>
  );
};

export default Home;
