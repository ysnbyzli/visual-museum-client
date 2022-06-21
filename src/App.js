import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { Switcher } from "./router";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { fetchAllPerson } from "./store/personSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPerson());
  }, [dispatch]);

  return (
    <div className="h-full">
      <BrowserRouter>
        <Header />
        <Switcher />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
