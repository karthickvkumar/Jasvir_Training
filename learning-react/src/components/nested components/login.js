import React, {useState} from "react";
import axios from "axios";

const LoginFormComponent = () => {

  const [login, setLogin] = useState({});

  const handleInput = (event) => {
    setLogin({...login, [event.target.id] :  event.target.value})
  }

  const submitLogin = () => {
    const url = "https://reqres.in/api/login";

    axios.post(url, login)
        .then((success) => {
          console.log(success);
          var response = success.data;
          console.log(response);
        })
        .catch((failure) => {
          console.log(failure);
          var response = failure.response.data;
          alert(response.error);
        })

  }
    
  return(
    <div>
      <h1>Login Form</h1>
      <div>
        <label>Enter your Email Id</label>
        <input type="text" placeholder="Email id.." onChange={handleInput} id="email"/>
      </div>
      <div>
        <label>Enter your Password</label>
        <input type="password" placeholder="password.." onChange={handleInput} id="password" />
      </div>
      <div>
        <button onClick={() => submitLogin()}>Login</button>
      </div>
    </div>
  )
}

export default LoginFormComponent;