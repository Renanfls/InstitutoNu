// App.js
"use client";
import { HomePage } from "@/pages/Home/HomePage";
import { MinhasPastasPage } from "@/pages/MinhasPastas/MinhasPastasPage";
import { HeaderPartial } from "@/partials/HeaderPartial/HeaderPartial";
import { AppContext } from "@/store/AppContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const initialState = {
  activePinId: null,
  mode: null,
  folders: [],
  type: null,
};

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <AppContext initialState={initialState}>
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/minhas-pastas" element={<MinhasPastasPage />} />
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}
