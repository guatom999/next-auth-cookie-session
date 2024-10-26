import React from "react";
import Link from "next/link";
import LogoutForm from "./logoutForm";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home Page</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
      <LogoutForm></LogoutForm>
    </nav>
  );
};

export default Navbar;
