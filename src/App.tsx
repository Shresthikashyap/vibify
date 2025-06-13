import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carousel from "./pages/Carousel";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
