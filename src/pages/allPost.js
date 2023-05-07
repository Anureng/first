import AllPost from "@/components/AllPost";
import AllRoutes from "@/components/AllRoutes";
import CreatePost from "@/components/CreatePost";
import Navbar from "@/components/Navbar";
import React from "react";

function allPost() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <AllPost />
    </div>
  );
}

export default allPost;
