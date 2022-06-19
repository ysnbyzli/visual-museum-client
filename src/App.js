import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { Switcher } from "./router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switcher />
      </BrowserRouter>
    </div>
  );
}

export default App;
