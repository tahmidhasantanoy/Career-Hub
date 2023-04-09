import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row md:items-center justify-between mx-36">
        <div>
          <h2 className="logo my-4">DevOps</h2>
        </div>
        <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row justify-between w-4/12 my-10 menu">
          <Link className="my-0.5" to="/">Home</Link>
          <Link className="my-0.5" to="">Statistic</Link>
          <Link className="my-0.5" to="">Applied Jobs</Link>
          <Link className="my-0.5" to="">Blog</Link>
        </div>
        <div>
          <button className="btn-bg-color my-14">Start Applying</button>
        </div>
    </nav>
  );
};

export default Header;
