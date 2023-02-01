import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardFilterProvider from "./context/CardFilterContext";
import Home from "./pages/Home";

function App() {
  return (
    <CardFilterProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </CardFilterProvider>
  );
}

export default App;
