import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<p>This path does not exist</p>} />
      </Routes>
    </BrowserRouter>
  );
}
