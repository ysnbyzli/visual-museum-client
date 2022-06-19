import React from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { onHandleToggleDarkTheme, selectDarkMode } from "../../store/appSlice";
import Search from "../Shared/Search";

function Header() {
  const isDarkMode = useSelector(selectDarkMode);
  console.log("🚀 ~ file: index.js ~ line 9 ~ Header ~ isDarkMode", isDarkMode);

  const dispatch = useDispatch();

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="py-5 shadow-lg bg-gray-50 shadow-slate-50 dark:bg-backdrop dark:shadow-slate-900">
      <div className="container flex items-center justify-between mx-auto">
        <Search />
        <div>
          <label
            htmlFor="purple-toggle"
            className="relative inline-flex items-center mr-5 cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="purple-toggle"
              className="sr-only peer"
              checked={isDarkMode}
              onChange={() => dispatch(onHandleToggleDarkTheme())}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
