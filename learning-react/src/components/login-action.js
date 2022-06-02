import React, {Component} from "react";

class LoginActionComponent extends Component{

  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <div>
          <label>Enter your Email Id</label>
          <input type="text" placeholder="Enter your email id"/>
        </div>
        <div>
          <label>Enter your Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    )
  }
}

export default LoginActionComponent;