import User from "./components/User";
import "./App.css";

function App() {
  const users = [
    {
      id: 1,
      name: "Ashraf",
      age: "23",
    },
    {
      id: 2,
      name: "Ayman",
      age: "23",
    },
    {
      id: 3,
      name: "Mahmoud",
      age: "23",
    },
  ];

  return (
    <div className="App">
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
}

export default App;
