import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";
import { fetchAllPerson } from "./store/personSlice";

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
