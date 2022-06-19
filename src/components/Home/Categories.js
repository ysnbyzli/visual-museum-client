import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getCategoriesAndCountByPerson } from "../../api/request";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getCategoriesAndCountByPerson();
        console.log("🚀 ~ file: Categories.js ~ line 13 ~ response", data);
        setCategories(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <div className="flex mt-5 md:justify-end md:w-2/5 md:mt-0 md:ml-10">
      <ul className="w-full border rounded-lg md:w-2/3 h-max">
        {categories.map(({ category: { title, _id }, count }) => (
          <li className="flex px-5 py-3 border-b last:border-b-0" key={_id}>
            <h4>{title}</h4>
            <span className="flex items-center justify-center w-4 h-4 ml-2 text-[9px] font-semibold text-white rounded-full bg-violet-400">
              {count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
