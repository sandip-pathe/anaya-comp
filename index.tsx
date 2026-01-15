import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Subscribe from "./pages/Subscribe";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Developers from "./pages/Developers";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="developer" element={<Developers />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
