import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default function MyNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
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
              to={"movie"}
            >
              Movie
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
