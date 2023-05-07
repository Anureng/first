import AllPost from "@/components/AllPost";
import AllRoutes from "@/components/AllRoutes";
import CreatePost from "@/components/CreatePost";
import Navbar from "@/components/Navbar";
import YourFriend from "@/components/YourFriend";
import YourPost from "@/components/YourPost";
import React from "react";
import { NavLink } from "react-router-dom";

function yourPost() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <CreatePost />
      <YourPost />
      <YourFriend />
    </div>
  );
}

export default yourPost;
