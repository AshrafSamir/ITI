import React from "react";
import { Outlet } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";

export default function MovieModule() {
  return (
    <MovieContext>
      <div className="container mt-5">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </MovieContext>
  );
}
