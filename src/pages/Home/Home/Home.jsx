import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import CustomerView from "../CustomerView/CustomerView";
import PlayGround from "../PlayGround/PlayGround";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service> 
    <Gallery></Gallery>
      <ShopCategory></ShopCategory>
      <CustomerView></CustomerView>
      <PlayGround></PlayGround> 
    </div>
  );
};

export default Home;
