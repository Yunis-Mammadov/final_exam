import React from "react";
import { Routes, Route } from "react-router-dom"
import Add from "../pages/Add";
import Home from "../pages/Home";

const ROUTES = () => {
  return (
    <>
      <Routes>
        <Route path = "" element = {<Home/>}/>
        <Route path = "addserver" element = {<Add/>}/>
      </Routes>
    </>
  );
};

export default ROUTES;
