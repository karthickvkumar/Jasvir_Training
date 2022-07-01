import React, {useState} from "react";
import axios from "axios";

const InboxComponent = () => {

  const [userList, setUserList] = useState([]);


  const loadUsers = () => {
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
        .then((success) => {
          const response = success.data;
          setUserList(response.data);
        })
        .catch((failure) => {
          console.log(failure);
        });
  }

  const deleteUser = (id, index) => {
    let url = "https://reqres.in/api/users/" + id;
    
    axios.delete(url)
      .then((success) => {
        console.log(success);
        userList.splice(index, 1);
        setUserList(() => [...userList]);
      })
      .catch((failure) => {
        console.log(failure);
      })
  }

  const profiles = userList.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td>
          <img src={value.avatar} />
        </td>
        <td>
          <button onClick={() => deleteUser(value.id, index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return(
    <div>
      <h1>This is a Inbox components</h1>
      <button onClick={() => loadUsers()}>Load List of Users</button>
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Avatar</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {profiles}
        </tbody>
      </table>
    </div>
  )
}

export default InboxComponent;