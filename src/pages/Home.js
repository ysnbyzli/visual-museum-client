import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
      <Slider />
      <div className="container flex flex-col mx-auto my-10 md:flex-row">
        <LatestArticles />
        <Categories />
      </div>
    </div>
  );
}

export default Home;
