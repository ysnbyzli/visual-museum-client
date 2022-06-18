import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventsByLimit } from "../api/request";
import Header from "../components/Header";
import Slider from "../components/Shared/Slider";
import { fetchAllPerson } from "../store/personSlice";

function Home(props) {
  const { data } = useSelector((state) => state.persons);
  const [events, setEvents] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPerson());
    (async () => {
      try {
        const response = await getEventsByLimit(5);
        console.log(response);
        setEvents(response?.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log({ events });

  return (
    <div>
      <Header />
      <Slider />
      <div className="flex flex-col md:flex-row my-10">
        <div className="px-1 md:px-0 md:w-3/5">
          <h2 className="mb-5 font-bold text-xl">Son Yazılar</h2>
          <ul>
            {events?.map(({ title, description }) => (
              <li className="mb-2">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-2/5">Hi</div>
      </div>
    </div>
  );
}

export default Home;
