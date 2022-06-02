import React, {Component} from "react";

class LoginActionComponent extends Component{

  constructor(){
    super();
  }

  loginSubmit(){
    alert("Form is submitted");
  }

  render(){
    return(
      <div>
        <div>
          <label className="label">Enter your Email Id</label>
          <input type="text" className="inputbox" placeholder="Enter your email id"/>
        </div>
        <div className="space">
          <label className="label">Enter your Password</label>
          <input type="password" className="inputbox" placeholder="Enter your password" />
        </div>
        <div className="space">
          <button onClick={() => this.loginSubmit() }>Login</button>
        </div>
      </div>
    )
  }
}

export default LoginActionComponent;