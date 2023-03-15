import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
export default function MasterPage() {
  
  return (
    <>
      <Navbar />
      <div className="container py-5">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
