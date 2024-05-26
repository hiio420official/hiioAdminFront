import React from 'react';
import {GlobalStyle} from "./libs/styles/GlobalStyle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./libs/layouts/MainLayout";
import SignIn from "./pages/SignIn";

function App() {


  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path={"/"} element={<div>s</div>}/>
            </Route>
            <Route path={"/signup"} element={<div>signup</div>}></Route>
            <Route path={"/signin"} element={<SignIn/>}></Route>
            <Route path={"/signout"} element={<div>asdasd</div>}></Route>
            <Route path={"*"} element={<div>notfound</div>}/>
        </Routes>
        <GlobalStyle/>
    </BrowserRouter>
  );
}



export default App;
