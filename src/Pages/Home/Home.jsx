import React from "react";
import Banner from "../../components/Banner";
import Instagram from "../../components/Instagram";
import Blog from "../../components/Blog";
import Policy from "../../components/Policy";
import AllBrands from "../../components/AllBrands";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Policy></Policy>
      <AllBrands></AllBrands>
      <Blog></Blog>
      <Instagram></Instagram>
    </div>
  );
};

export default Home;
