// App.js
"use client";
import { HomePage } from "@/pages/Home/HomePage";
import { MinhasPastasPage } from "@/pages/MinhasPastas/MinhasPastasPage";
import { HeaderPartial } from "@/partials/HeaderPartial/HeaderPartial";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { saveFolder, savePinInFolder } from "@/services/pinService";

export default function App() {
  //saveFolder("JS");
  savePinInFolder("bb1d-c444", "pin1");
  return (
    <BrowserRouter>
      <div className="app">
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-pastas" element={<MinhasPastasPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
