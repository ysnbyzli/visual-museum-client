import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import { fetchAllPerson } from "./store/personSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPerson());
  }, []);

  return (
    <div className="container mx-auto">
      <Home />
    </div>
  );
}

export default App;
