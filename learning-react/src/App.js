import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// import HeaderComponent from "./components/header";
import LoginActionComponent from "./components/login-action";
import ResetAccountComponent from "./components/reset-account";
import ConditionalViewComponent from "./components/conditional-view";

import "./css/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginActionComponent></LoginActionComponent>}></Route>
        <Route path="reset" element={<ResetAccountComponent></ResetAccountComponent>}></Route>
        <Route path="conditional" element={<ConditionalViewComponent></ConditionalViewComponent>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
