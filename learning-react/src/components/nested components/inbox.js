import React from "react";
import axios from "axios";

const InboxComponent = () => {

  const loadUsers = () => {
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
        .then((success) => {
          console.log(success.data);
        })
        .catch((failure) => {
          console.log(failure);
        });
  }

  return(
    <div>
      <h1>This is a Inbox components</h1>
      <button onClick={() => loadUsers()}>Load List of Users</button>
    </div>
  )
}

export default InboxComponent;