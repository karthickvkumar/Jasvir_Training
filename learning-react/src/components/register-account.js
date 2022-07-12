import React, {useState} from "react";

const RegisterAccount = () =>{

  const [registerForm, setRegisterForm] = useState({});
  const [error, setError] = useState({});

  const onHandleInput = (event) => {
    // console.log(event.target.value, event.target.name);
    setRegisterForm({...registerForm, [event.target.name] : event.target.value});
  }

  const onHandleCheckbox = (event) => {
    if(event.target.checked){
      if(registerForm.hobbies){
        registerForm.hobbies.push(event.target.value);
        setRegisterForm({...registerForm, [event.target.name] : registerForm.hobbies})
      }
      else{
        let hobbies = [];
        hobbies.push(event.target.value);
        setRegisterForm({...registerForm, [event.target.name] : hobbies})
      }
    }else{
      let index = registerForm.hobbies.findIndex((value, index) => {
        return value == event.target.value
      });
      registerForm.hobbies.splice(index, 1);
      setRegisterForm({...registerForm, [event.target.name] : registerForm.hobbies});
    }
  }

  const createAccount = () => {
    setError({
      name : !registerForm.name || registerForm.name == "" ? true : false,
      email : !registerForm.email || registerForm.email == "" ? true : false, 
      password : !registerForm.password || registerForm.password == "" ? true : false,
      date_of_birth : !registerForm.date_of_birth || registerForm.date_of_birth == "" ? true : false,
      gender : !registerForm.gender || registerForm.gender == "" ? true : false,
      hobbies : !registerForm.hobbies || registerForm.hobbies.length == 0 ? true : false,
      address : !registerForm.address || registerForm.address == "" ? true : false,
      city : !registerForm.city || registerForm.city == "" ? true : false,
    });
  }

  return(
    <div>
      <h1>Register Account</h1>
      <div>
        <label className="label">Enter your Name</label>
        <input className="inputbox" type="text" placeholder="enter your name.." onChange={onHandleInput} name="name"/>
        { error.name && <p className="error-msg">Please enter a valid name</p> }
      </div>
      <div className="space">
        <label className="label">Enter your Email Id</label>
        <input className="inputbox" type="email" placeholder="enter your email id.." onChange={onHandleInput} name="email"/>
        { error.email && <p className="error-msg">Please enter a valid email address</p>}
      </div>
      <div className="space">
        <label className="label">Enter your Password</label>
        <input  className="inputbox" type="password" placeholder="enter your password.." onChange={onHandleInput} name="password"/>
        { error.password && <p className="error-msg">Please enter a valid password</p> }
      </div>
      <div className="space">
        <label className="label">Select your DOB</label>
        <input  className="inputbox" type="date" onChange={onHandleInput} name="date_of_birth"/>
        { error.date_of_birth && <p className="error-msg">Please select any date</p>}
      </div>
      <div className="space">
        <label className="label">Select your Gender</label>
        <input type="radio" name="gender" value="male" onChange={onHandleInput}/>Male
        <input type="radio" name="gender" value="female" onChange={onHandleInput}/>Female
        <input type="radio" name="gender" value="others" onChange={onHandleInput}/>Others
        { error.gender && <p className="error-msg">Please select any gender</p>}
      </div>
      <div className="space">
        <label className="label">Select your Hobbies</label>
        <input type="checkbox" onChange={onHandleCheckbox} value="cricket" name="hobbies"/>Cricket
        <input type="checkbox" onChange={onHandleCheckbox} value="football" name="hobbies"/>Football
        <input type="checkbox" onChange={onHandleCheckbox} value="baseball"  name="hobbies"/>BaseBall
        <input type="checkbox" onChange={onHandleCheckbox} value="hockey" name="hobbies"/>Hockey
        <input type="checkbox" onChange={onHandleCheckbox} value="chess" name="hobbies"/>Chess
        <input type="checkbox" onChange={onHandleCheckbox} value="vollyball" name="hobbies"/>Vollyball
        { error.hobbies && <p className="error-msg">Please select any hobbies</p> }
      </div>
      <div className="space">
        <label className="label">Enter your Address</label>
        <textarea placeholder="enter your address.." onChange={onHandleInput} name="address"></textarea>
        { error.address && <p className="error-msg">Please select any address</p>}
      </div>
      <div className="space">
        <label className="label">Select your City</label>
        <select className="inputbox" defaultValue={""} onChange={onHandleInput} name="city">
          <option disabled value="">Please select any one city</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Chennai</option>
          <option>Banglore</option>
        </select>
        { error.city && <p className="error-msg">Please select any city</p>}
      </div>
      <div className="space">
        <button onClick={() => createAccount()}>Create Account</button>
      </div>
    </div>
  )
}

export default RegisterAccount;