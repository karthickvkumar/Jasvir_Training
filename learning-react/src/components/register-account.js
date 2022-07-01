import React, {useState} from "react";

const RegisterAccount = () =>{

  const [registerForm, setRegisterForm] = useState({});

  const onHandleInput = (event) => {
    // console.log(event.target.value, event.target.name);
    setRegisterForm({...registerForm, [event.target.name] : event.target.value});
  }

  const createAccount = () => {
    console.log(registerForm)
  }

  return(
    <div>
      <h1>Register Account</h1>
      <div>
        <label>Enter your Name</label>
        <input type="text" placeholder="enter your name.." onChange={onHandleInput} name="name"/>
      </div>
      <div>
        <label>Enter your Email Id</label>
        <input type="email" placeholder="enter your email id.." onChange={onHandleInput} name="email"/>
      </div>
      <div>
        <label>Enter your Password</label>
        <input type="password" placeholder="enter your password.." onChange={onHandleInput} name="password"/>
      </div>
      <div>
        <label>Select your DOB</label>
        <input type="date" onChange={onHandleInput} name="date_of_birth"/>
      </div>
      <div>
        <label>Select your Gender</label>
        <input type="radio" name="gender" value="male" onChange={onHandleInput}/>Male
        <input type="radio" name="gender" value="female" onChange={onHandleInput}/>Female
        <input type="radio" name="gender" value="others" onChange={onHandleInput}/>Others
      </div>
      <div>
        <label>Select your Hobbies</label>
        <input type="checkbox" onChange={onHandleInput} value="cricket" name="hobbies"/>Cricket
        <input type="checkbox" onChange={onHandleInput} value="football" name="hobbies"/>Football
        <input type="checkbox" onChange={onHandleInput} value="baseball"  name="hobbies"/>BaseBall
        <input type="checkbox" onChange={onHandleInput} value="hockey" name="hobbies"/>Hockey
        <input type="checkbox" onChange={onHandleInput} value="chess" name="hobbies"/>Chess
        <input type="checkbox" onChange={onHandleInput} value="vollyball" name="hobbies"/>Vollyball
      </div>
      <div>
        <label>Enter your Address</label>
        <textarea placeholder="enter your address.." onChange={onHandleInput} name="address"></textarea>
      </div>
      <div>
        <label>Select your City</label>
        <select defaultValue={""} onChange={onHandleInput} name="city">
          <option disabled value="">Please select any one city</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Chennai</option>
          <option>Banglore</option>
        </select>
      </div>
      <div>
        <button onClick={() => createAccount()}>Create Account</button>
      </div>
    </div>
  )
}

export default RegisterAccount;