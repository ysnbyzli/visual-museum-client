import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";

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
    title: "Zaman Çizelgesi",
    key: "TIMELINE",
    path: "/zaman-cizelgesi/:id",
    element: <Timeline />,
  },
];

export const Switcher = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, element, exact }) => (
        <Route path={path} element={element} exact={exact} />
      ))}
    </Routes>
  );
};
