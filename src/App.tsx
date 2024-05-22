import React, {useEffect} from 'react';
import './App.css';
import styled from "styled-components";
import {GlobalStyle} from "./libs/styles/GlobalStyle";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import Main from "./pages/main/Main";
function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Main/>}></Route>
            <Route path={"/signup"} element={<div>signup</div>}></Route>
            <Route path={"/signin"} element={<div>asdasd</div>}></Route>
            <Route path={"/signout"} element={<div>asdasd</div>}></Route>
            <Route path={"*"} element={<div>notfound</div>}/>
        </Routes>
    </BrowserRouter>
  );
}



export default App;
