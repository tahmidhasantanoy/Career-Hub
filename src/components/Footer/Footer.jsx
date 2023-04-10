import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" bg-neutral-900 text-white m-0 md:px-16">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5  footer-responsive">
        <div className="w-11/12 .md:w-9/12 footer-info">
          <h3 className="text-2xl mt-4">CareerHub</h3>
          <p className=".sm:w-2/12">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img src="" alt="" />
        </div>
        <div className="footer-info w-8/12 m-0">
          <h3 className="text-2xl mt-4">Company</h3>
          <p>About Us</p>
          <p>Work</p>
          <p>Latest News</p>
          <p>Careers</p>
        </div>
        <div className="footer-info w-8/12">
          <h3 className="text-2xl mt-4">Product</h3>
          <p>Prototype</p>
          <p>Plans & Pricing</p>
          <p>Customers</p>
          <p>Integrations</p>
        </div>
        <div className="footer-info w-8/12">
          <h3 className="text-2xl mt-4">Support</h3>
          <p>Help Desk</p>
          <p>Sales</p>
          <p>Become a Partner</p>
          <p>Developers</p>
        </div>
        <div className="footer-info w-8/12">
          <h3 className="text-2xl mt-4">Contact</h3>
          <p>524 Broadway , NYC</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </div>
      <hr className="px-10" />
      <div className="md:flex justify-between sm:text-center px-10">
        <div>@2023 CareerHub. All Rights Reserved</div>
        <div>Powered by CareerHub</div>
      </div>
    </div>
  );
};

export default Footer;
