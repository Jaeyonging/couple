import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css'
import Footer from "./components/Footer";
import Setting from "./routes/Setting";
import Map from "./routes/Map";
import { Couple } from "./routes/Couple";
import Login from "./routes/login/Login";
import Find from "./routes/login/Find";
import Register from "./routes/login/Register";
import Auth from "./routes/login/Auth";
import Email from "./routes/login/Email";


function App() {
  const location = useLocation()
  useEffect(() => {
    console.log(location.pathname)
  }, [])
  return (
    <>
      < Suspense fallback={< div > 로딩중</div >}>
        <Routes>
          <Route path="/" element={<Couple />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/register" element={<Register />} />
          <Route path="/login/email" element={<Email />} />
          <Route path="/login/auth" element={<Auth />} />
          <Route path="/map" element={<Map />} />
          <Route path="/couple" element={<Couple />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        {!location.pathname.includes("login") && <Footer />

        }
      </Suspense >

    </>
  );
}

export default App;
