import React, {Component} from "react";

class LoginActionComponent extends Component{

  constructor(){
    super();
    this.state = {};
  }

  loginSubmit(){
    alert("Form is submitted");
    console.log(this.state);
  }

  handleInput(event){
    // console.log(event.target.value, event.target.id);
    this.setState({
      [event.target.id] : event.target.value
    });
  }

  render(){
    return(
      <div>
        <div>
          <label className="label">Enter your Email Id</label>
          <input type="text" className="inputbox" id="email" placeholder="Enter your email id" onChange={ this.handleInput.bind(this) }/>
        </div>
        <div className="space">
          <label className="label">Enter your Password</label>
          <input type="password" className="inputbox" id="password" placeholder="Enter your password" onChange={ this.handleInput.bind(this) }/>
        </div>
        <div className="space">
          <button onClick={() => this.loginSubmit()}>Login</button>
        </div>
      </div>
    )
  }
}

export default LoginActionComponent;