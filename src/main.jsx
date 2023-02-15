
import React from "react";
import ReactDOMClient  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/Home";
import "./css/index.css";
import LoadingPage from "./pages/Loading";

ReactDOMClient.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/admin" element={<LoadingPage />} />
        <Route path="/" element={<App />} />

      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);
