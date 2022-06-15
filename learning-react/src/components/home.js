import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

const HomeComponent = () => {

  const navigate = useNavigate();

  const goToResetPage = () => {
    navigate("/reset");
  }

  return(
    <div>
      <h1>This is a Home Page</h1>
       <h1>Linking Pages - Way 1 (Via HTML Tag)</h1>
       <NavLink to="/login">Login Page</NavLink>
      
       <h1>Linking Pages - Way 2 (Via Function)</h1>
       <button onClick={() => goToResetPage()}>Go to Reset Page</button>
    </div>
  )
}

export default HomeComponent;