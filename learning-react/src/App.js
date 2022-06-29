import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// import HeaderComponent from "./components/header";
import LoginActionComponent from "./components/login-action";
import ResetAccountComponent from "./components/reset-account";
import ConditionalViewComponent from "./components/conditional-view";
import HomeComponent from "./components/home";
import MailView from "./components/mail";

import InboxComponent from "./components/nested components/inbox";
import TrashComponent from "./components/nested components/trash";
import StarredComponent from "./components/nested components/starred";
import LoginFormComponent from "./components/nested components/login";
import UpdateForm from "./components/nested components/update-form";

import "./css/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent></HomeComponent>}></Route>
        <Route path="login" element={<LoginActionComponent></LoginActionComponent>}></Route>
        <Route path="reset" element={<ResetAccountComponent></ResetAccountComponent>}></Route>
        <Route path="conditional" element={<ConditionalViewComponent></ConditionalViewComponent>}></Route>
        <Route path="mail" element={<MailView></MailView>}>
           <Route path="inbox" element={<InboxComponent></InboxComponent>}></Route>
           <Route path="trash" element={<TrashComponent></TrashComponent>}></Route>
           <Route path="starred" element={<StarredComponent></StarredComponent>}></Route>
           <Route path="login" element={<LoginFormComponent></LoginFormComponent>}></Route>
           <Route path="update" element={<UpdateForm></UpdateForm>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
