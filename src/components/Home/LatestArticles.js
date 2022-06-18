import React, { useEffect, useState } from "react";
import { getEventsByLimit } from "../../api/request";

const LatestArticles = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getEventsByLimit(5);
        setEvents(response?.data);
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="px-1 md:px-0 md:w-3/5">
      <h2 className="mb-5 text-xl font-bold">Son Yazılar</h2>
      <ul>
        {events?.map(({ title, description, _id }) => (
          <li className="mb-2" key={_id}>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestArticles;
