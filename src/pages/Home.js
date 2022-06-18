import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventsByLimit } from "../api/request";
import Header from "../components/Header";
import Categories from "../components/Home/Categories";
import LatestArticles from "../components/Home/LatestArticles";
import Slider from "../components/Shared/Slider";
import { fetchAllPerson } from "../store/personSlice";

function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPerson());
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <div className="flex flex-col my-10 md:flex-row">
        <LatestArticles />
        <Categories />
      </div>
    </div>
  );
}

export default Home;
