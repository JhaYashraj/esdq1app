import { useState } from "react";
import User from "./Users";

function UserList(props) {

    const [users, setUsers] = useState([])
    var rows = []

    function showData() {
        // alert("Hello There! This is an alert!")
        fetch("https://reqres.in/api/users?page=1")
          .then(response => response.json())
          .then(data => {
              console.table(data.data);
              
              for (let i = 0; i < data.data.length; i++){
                  rows.push(<User id= {data.data[i].id} first_name= {data.data[i].first_name} last_name={data.data[i].last_name} email={data.data[i].email} avatar={data.data[i].avatar} />)
              }

              setUsers(rows)
          });
    }
    
    function showUsers() {
        
    }

    return ( 
        <>
            <button onClick={showData}>Show Data</button><br />

            <table>
                <thead>Users</thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>avatar</th>
                </tr>
                {users}
            </table>
        </>
     );
}

export default UserList;