import React from "react";
import {Outlet, NavLink} from "react-router-dom";

const MailView = () => {
  return(
    <div className="mail-wrapper">
      <div className="mail-header"></div>
      <div className="content-section">
        <div className="sidebar">
          <NavLink to="/mail/inbox">Inbox Page</NavLink>
          <br></br>
          <NavLink to="/mail/trash">Trash Page</NavLink>
          <br></br>
          <NavLink to="/mail/starred">Starred Page</NavLink>
          <br></br>
          <NavLink to="/mail/login">Login Page</NavLink>
          <br></br>
          <NavLink to="/mail/update">Update Page</NavLink>
          <br></br>
        </div>
        <div className="middle-section">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default MailView;