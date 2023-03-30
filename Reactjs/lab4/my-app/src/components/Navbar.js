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
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}
