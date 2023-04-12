import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    // <nav className="flex sm:flex-col md:flex-row lg:flex-row md:items-center justify-between mx-36">
    <nav className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:items-center justify-between text-center mx-36 my-8">
        <div>
          <h2 className="logo my-4"><Link to="/">DevOps</Link></h2>
        </div>
        {/* <div className="flex sm:flex-col md:flex-row .lg:flex-row justify-between w-4/12 my-10 menu"> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 .text-center .sm:text-start w-fit my-6 mb-16 menu">
          <ActiveLink className="m-3 my-0.5" to="/">Home</ActiveLink>
          <ActiveLink className="m-3 my-0.5" to="/statistic">Statistic</ActiveLink>
          <ActiveLink className="m-3 my-0.5" to="/appliedjobs">Applied Jobs</ActiveLink>
          <ActiveLink className="m-3 my-0.5" to="/blog">Blog</ActiveLink>
        </div>
        <div>
          <button className="btn-bg-color my-14">Start Applying</button>
        </div>
    </nav>
  );
};

export default Header;
