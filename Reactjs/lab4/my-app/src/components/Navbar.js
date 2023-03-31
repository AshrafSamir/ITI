import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export default function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="home">Logo</Navbar.Brand> */}
          <Nav className="me-auto">
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
              to={"home"}
            >
              Home
            </Link>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
              to={"about"}
            >
              About
            </Link>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
              to={"movie/add"}
            >
              Add
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="container mt-5">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
}
