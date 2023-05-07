import AllRoutes from "@/components/AllRoutes";
import AllUser from "@/components/AllUser";
import Navbar from "@/components/Navbar";
import React from "react";

function home() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <AllUser />
    </div>
  );
}

export default home;
