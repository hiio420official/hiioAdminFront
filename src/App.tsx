import React, {useEffect} from 'react';
import './App.css';
import styled from "styled-components";
import {GlobalStyle} from "./libs/styles/GlobalStyle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
function App() {
    const [cookies, setCookie, removeCookie] = useCookies(['a']);
    useEffect(()=>{
        axios.get("http://localhost:8088/api/v1/user/list",{withCredentials:true});
        console.log(cookies);
    },[])
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
