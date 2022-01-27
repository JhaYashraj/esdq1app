import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Sub from './components/Sub';
import Student from './components/Student';
import UserList from './components/UserList';

function App() {

  var student1 = {
    name: "Hrishi",
    roll_no: 12,
    city: "mumbai",
    age: 20
  };

  return (
    <div className="App">
      <UserList />

      {/* <h1>Hello World</h1>
      {5 * 5}


      <Add x={5} y={22} />
      <Sub x={5} y={22} />
      <Student data = {student1}/> */}
    </div>
  );
}

export default App;
