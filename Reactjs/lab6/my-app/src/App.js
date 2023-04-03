import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchMovies } from "./redux/actions/moviesActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

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
