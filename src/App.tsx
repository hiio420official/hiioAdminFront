import React from 'react';
import './App.css';
import styled from "styled-components";
import {GlobalStyle} from "./libs/styles/GlobalStyle";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<div>asdasd</div>}></Route>
            <Route path={"/signup"} element={<div>asdasd</div>}></Route>
            <Route path={"/signin"} element={<div>asdasd</div>}></Route>
            <Route path={"/signout"} element={<div>asdasd</div>}></Route>
            <Route path={"*"} element={<div>notfound</div>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
