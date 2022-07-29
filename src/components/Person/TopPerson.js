import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { findTopViewingPersons } from "../../api/request";

const TopPerson = () => {
  const [topPersons, setTopPersons] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await findTopViewingPersons();
        setTopPersons(response?.data);
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="flex-grow ml-auto ">
      <h2 className="text-xl font-bold text-blue-700">
        En Çok Ziyaret Edilen Kişiler
      </h2>
      <ul className="pt-3 space-y-3">
        {topPersons.map((person, index) => (
          <li className="relative flex items-center " key={person?._id}>
            <Link
              to={`/kisiler/${person._id}`}
              className="flex items-center cursor-pointer"
            >
              <img
                src={person?.photo}
                alt="sanatci"
                className="object-cover w-8 h-8 mr-2 rounded-xl"
              />
              <span className="ml-[2px] link-underline link-underline-black ">
                {person?.firstName} {person?.lastName}
              </span>
              <span className="ml-1 text-[8px] font-thin">
                ({person?.viewing})
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopPerson;
