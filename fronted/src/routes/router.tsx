import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
import {Client} from "../components/Client/Client";

const Router = () => {
  return (
    
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Client" element={<Client/>} />
          </Routes>
  )
  
}

export default Router;