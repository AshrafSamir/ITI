import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/blog">
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  href="/api/auth/signout"
                  onClick={() => signOut()}
                >
                  signOut
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" href="/home">
                Home
              </Link>
            </li>

         
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                href="/api/auth/signin"
                onClick={() => signIn()}
              >
                signIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
