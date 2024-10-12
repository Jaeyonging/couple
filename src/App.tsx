import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./routes/Home";
import './App.css'


function App() {

  return (
    <>
      < Suspense fallback={< div > 로딩중</div >}>
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </Suspense >

    </>
  );
}

export default App;
