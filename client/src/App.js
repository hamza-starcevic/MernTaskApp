import "./App.css";
import { useState, useEffect } from "react";
import Axios from 'axios'

function App() {
  const [listOfUsers, setListOfUsers] = useState([
    { name: "Hamza", age: 20, username: "ja" },
  ]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response)=>{
      setListOfUsers(response.data)
    })
  },[])

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h3>Name: {user.name}</h3>
              <h3>Age: {user.age}</h3>
              <h3>Username: {user.username}</h3>
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default App;
