import React from "react";
import Link from "next/link";
import { auto } from "@popperjs/core";

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand">GameLab</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav w-100">
          <li className="nav-item">
            <Link className="nav-link" href="/home">
              Home
            </Link>
          </li>
          <li className="nav-item " style={{ marginLeft: "auto" }}>
            <Link className="nav-link " href="/home/addgame">
              <span>Add&#43;</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
