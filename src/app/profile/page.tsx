import React from "react";
import { changePremium, getSession, updateUsername } from "../actions";
import { redirect } from "next/navigation";

// type Props = {};

const ProfilePage = async () => { 

  const session = await getSession();

  if(!session.isLoggedIn){
    redirect("/")
  }

  return (
    <div className="">
      <h1>Welcome to the Profile Page</h1>
      <p>
        Welcome , <b>{session.username}</b>
      </p>
      <span>You are a <b>{session?.isPro ? "Premium" : "Free"}</b></span>
      <form action={changePremium}>
        <button>{session?.isPro ? "Cancel" : "Buy"} Premium </button>
      </form>

      <form action={updateUsername}>
        <input type="text" name="username" required placeholder={session.username}></input>
        <button>Update</button>
      </form>
    </div>
  );
};

export default ProfilePage;
