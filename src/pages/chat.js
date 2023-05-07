import AllRoutes from "@/components/AllRoutes";
import ChatCreate from "@/components/ChatCreate";
import Navbar from "@/components/Navbar";
import React from "react";

function chat() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <ChatCreate />
    </div>
  );
}

export default chat;
