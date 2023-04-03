import React from "react";
import { Outlet } from "react-router-dom";

export default function MovieModule() {
  return (
    <div className="container mt-5">
      <div className="row">
        <Outlet />
      </div>
    </div>
  );
}
