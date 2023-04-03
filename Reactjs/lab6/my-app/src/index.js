import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/MovieModule/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import MovieDetails from "./pages/MovieModule/MovieDetails/MovieDetails";
import AddMovie from "./pages/MovieModule/Add/AddMovie";
import MovieModule from "./pages/MovieModule/MovieModule";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "movie",
        element: <MovieModule />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "details/:id",
            element: <MovieDetails />,
          },
          {
            path: "add",
            element: <AddMovie />,
          },
        ],
      },
      {
        path: "/",
        element: <Navigate to="movie" />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
