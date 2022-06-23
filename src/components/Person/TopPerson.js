import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findTopViewingPersons } from "../../api/request";
import { CrownIcon } from "../../components/Shared/icons";
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
            <Link to="/" className="cursor-pointer ">
              {index <= 2 && (
                <span
                  className={`absolute ${
                    index === 0
                      ? "text-yellow-400"
                      : index === 1
                      ? "text-slate-400"
                      : "text-amber-700"
                  } transform -rotate-45 -top-[8px] -left-[8px]`}
                >
                  <CrownIcon />
                </span>
              )}
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
