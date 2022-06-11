import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { encodeDateYear } from "../../utils/date";

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
    <div className="w-[200px] text-xs mx-2 md:mx-0 md:text-sm md:w-[500px] relative">
      <input
        placeholder="Ara"
        type="text"
        onChange={({ target }) => setSearch(target.value)}
        className={`w-full h-8 md:h-10 px-5 ${
          isTyping
            ? "rounded-t-md outline-none  border-t border-l border-r border-orange-500"
            : "rounded-md border-none outline-none"
        }`}
      />
      {result && isTyping && (
        <div
          className={`absolute left-0 w-full ${
            isTyping &&
            result.length > 0 &&
            "rounded-b-md bg-white border-l border-r border-b border-orange-500"
          }`}
        >
          {result?.map((item) => (
            <div
              key={item?.id}
              className="px-5 py-3 flex cursor-pointer hover:bg-slate-50"
            >
              <div className="h-10 w-10 mr-2 hidden md:flex">
                <img
                  src={item?.photo}
                  alt={item?.firstName}
                  className="w-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold">{item?.fullName}</h4>
                <div className="flex gap-2 text-xs text-gray-600">
                  <span>{encodeDateYear(item?.dateOfBirth)}</span>-
                  <span>{encodeDateYear(item?.dateOfDeath)}</span>
                </div>
              </div>
            </div>
          ))}
          {result.length === 0 && (
            <div className="bg-white rounded-b-md border-l px-5 py-3 flex items-center justify-center text-xs border-r border-b border-orange-500">
              "{search}" ile ilgili bir şey bulunamadı!
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
