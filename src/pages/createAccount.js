import AllRoutes from "@/components/AllRoutes";
import CreateAccount from "@/components/CreateAccount";
import Navbar from "@/components/Navbar";
import React from "react";

function createAccount() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <CreateAccount />
    </div>
  );
}

export default createAccount;
