import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css'
import Footer from "./components/Footer";
import Setting from "./routes/Setting";
import Map from "./routes/Map";
import { Couple } from "./routes/Couple";


function App() {

  return (
    <>
      < Suspense fallback={< div > 로딩중</div >}>
        <Routes>
          <Route path="/" element={<Couple />} />
          <Route path="/map" element={<Map />} />
          <Route path="/couple" element={<Couple />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        <Footer />
      </Suspense >

    </>
  );
}

export default App;
