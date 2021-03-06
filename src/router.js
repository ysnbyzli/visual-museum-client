import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/404";
import Home from "./pages/Home";
import Persons from "./pages/Persons";
import Detail from "./pages/Persons/Detail";

export const ROUTES = [
  {
    id: "1",
    title: "Anasayfa",
    key: "HOME",
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    id: "2",
    title: "Kişiler",
    key: "PERSONS",
    path: "/kisiler",
    element: <Persons />,
  },
  {
    id: "3",
    title: "Zaman Çizelgesi",
    key: "TIMELINE",
    path: "/kisiler/:id",
    element: <Detail />,
  },
];

export const Switcher = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      {ROUTES.map(({ path, element, exact, id }) => (
        <Route key={id} path={path} element={element} exact={exact} />
      ))}
    </Routes>
  );
};
