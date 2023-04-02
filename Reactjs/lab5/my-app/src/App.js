import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
