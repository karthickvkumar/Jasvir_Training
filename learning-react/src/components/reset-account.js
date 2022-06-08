import React, {useState} from 'react';

const ResetAccountComponent = () => {

  // const [name1, name2] = useState(initialValue);
  const [resetForm, setResetForm] = useState({});

  const FormSubmit = () => {
    // alert("Form is submitted");
    console.log(resetForm);
  }

  const onHandleInput = (event) => {
    // console.log(event.target.value, event.target.id);
    setResetForm({...resetForm, [event.target.id] : event.target.value})
  }

  return(
    <div>
      <h1>This is a Reset Account Component</h1>
      <div>
          <label className="label">Enter your Email Id</label>
          <input type="text" className="inputbox" id="email" placeholder="Enter your email id" onChange={onHandleInput}/>
        </div>
        <div className="space">
          <label className="label">Enter your Password</label>
          <input type="password" className="inputbox" id="password" placeholder="Enter your password" onChange={onHandleInput}/>
        </div>
        <div className="space">
          <button onClick={() => FormSubmit() }>Reset Account</button>
        </div>
    </div>
  )
}

export default ResetAccountComponent;