import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello Home Page</h1>} />
        <Route path="/about" element={<h3>Hello About Page</h3>} />
      </Routes>
    </BrowserRouter>
  );
}
