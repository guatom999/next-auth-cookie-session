import React from "react";
import Link from "next/link";
import LogoutForm from "./logoutForm";
import { getSession } from "../actions";

const Navbar = async () => {

  const session = await getSession()
  console.log("session" , session)

  return (
    <nav>
      <Link href="/">Home Page</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
      {session.isLoggedIn && <LogoutForm/>}
    </nav>
  );
};

export default Navbar;
