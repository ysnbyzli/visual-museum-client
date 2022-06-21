import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../assets/not-found.gif";
const NotFoundPage = () => {
  return (
    <div className="container flex flex-col items-center h-[600px] mx-auto">
      <img src={NotFound} alt="" className="object-cover mx-auto w-96 h-96" />
      <span className="mb-1 text-sm font-semibold text-blue-700">
        404 ERROR
      </span>
      <h3 className="text-3xl font-bold md-3">Sayfa Bulunamadı.</h3>
      <p className="mb-4 text-sm text-gray-500">
        Üzgünüz, aradağınız sayfayı bulamadık.
      </p>
      <Link to="/" className="text-blue-700">
        Anasayfa
      </Link>
    </div>
  );
};

export default NotFoundPage;
