import React from "react";
import { getSession } from "../actions";
import { redirect } from "next/navigation";
import Link from "next/link";

// type Props = {};

const PremiumPage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  if (!session.isPro) {
    return (
      <div className="notPremium">
        <h1>Only premium account can access to this page</h1>
        <Link href="/profile">
          Go to the profile page to upgrade to premium
        </Link>
      </div>
    );
  }

  return (
    <div className="premium">
      <h1>Welcome to the Premium Page</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default PremiumPage;
