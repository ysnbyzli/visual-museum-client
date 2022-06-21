import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { ChevronRightIcon } from "../Shared/icons";
const customStyles = {
  content: {
    top: "20%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    padding: 0,
    maxHeight: "300px",
    overflow: "none",
  },
  overlay: {
    position: "fixed",
    zIndex: 1020,
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, .45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
const Search = () => {
  const persons = useSelector((state) => state.persons.data);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const closeModal = () => setIsOpen(false);
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
  }, [search, isTyping, persons]);

  return (
    <form className="flex items-center ">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Kişi ara"
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Search;
