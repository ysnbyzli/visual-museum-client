import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { encodeDateYear } from "../../utils/date";
import { ChevronRightIcon } from "./icons";

function Search() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const persons = useSelector((state) => state.persons.data);

  const isTyping = search?.replace(/\s+/, " ").length > 0;

  useEffect(() => {
    if (isTyping) {
      setResult(
        persons.filter((item) =>
          item.fullName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      );
    } else {
      setResult([]);
    }
  }, [search]);

  return (
    <div className="w-3/5 max-w-[500px] text-xs mx-2 md:mx-0 md:text-sm  relative z-50 transition-all duration-300 ease-in-out">
      <input
        placeholder="Ara"
        type="text"
        onChange={({ target }) => setSearch(target.value)}
        className={`w-full h-10 md:h-10 px-5 border dark:bg-gray-800 bg-slate-100 rounded-md focus-within:outline-none ${
          isTyping && "border-violet-300 border-2 rounded-b-none"
        }`}
      />
      {result && isTyping && (
        <div
          className={`absolute left-0 w-full rounded-b-md dark:bg-gray-800 bg-slate-100 border-violet-300 border-t-0 border-b-2 border-x-2`}
        >
          {result?.map((item) => (
            <div
              key={item?.id}
              className="flex px-5 py-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <div className="hidden w-10 h-10 mr-2 md:flex md:items-center">
                <img
                  src={item?.photo}
                  alt={item?.firstName}
                  className="object-cover w-full rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold">{item?.fullName}</h4>
                <div className="flex gap-1 text-xs text-gray-600 dark:text-gray-300">
                  <span>{encodeDateYear(item?.dateOfBirth)}</span>-
                  <span>{encodeDateYear(item?.dateOfDeath)}</span>
                </div>
              </div>
              <div className="flex items-center justify-center ml-auto">
                <ChevronRightIcon />
              </div>
            </div>
          ))}
          {result.length === 0 && (
            <div className="flex items-center justify-center px-5 py-3 text-xs border-l dark:bg-gray-800 rounded-b-md">
              "{search}" ile ilgili bir şey bulunamadı!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
