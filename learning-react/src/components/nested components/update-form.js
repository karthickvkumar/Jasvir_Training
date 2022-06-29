import React, {useState} from "react";
import axios from "axios";

const UpdateForm = () => {

  const [update, setUpdate] = useState({});

  const handleInput = (event) => {
    setUpdate({...update, [event.target.id] :  event.target.value})
  }

  const submit = () => {
    const url = "https://reqres.in/api/users/2";

    axios.put(url, update)
      .then((success) => {
        const response = success.data;
        console.log(response);
      })
      .catch((failure) => {
        var response = failure.response.data;
        alert(response.error);
      })
  }

  return(
    <div>
       <h1>Update Form</h1>
      <div>
        <label>Enter your Name</label>
        <input type="text" placeholder="Name.." onChange={handleInput} id="name"/>
      </div>
      <div>
        <label>Enter your Job</label>
        <input type="text" placeholder="Job.." onChange={handleInput} id="job" />
      </div>
      <div>
        <button onClick={() => submit()}>Update</button>
      </div>
    </div>
  );
}

export default UpdateForm;