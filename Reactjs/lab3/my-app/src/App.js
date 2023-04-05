import './App.css';
import MyForm from './components/Form/Form';
import User from './components/User/User';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div className="App">
      <MyForm addUser={addUser} />

      <div className='container'>
        <div className='row'>
        {
        users.map((user, index) => {
          return (
            <User
              key={index}
              name={user.name}
              email={user.email}
              age={user.age}
            />
          );
        }
        )
      } 
        </div>
    </div>
    </div>
  );
}

export default App;
