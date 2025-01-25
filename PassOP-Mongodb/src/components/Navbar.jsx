import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800  text-white hover:bg-slate-900 w-full">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-12 ">
        <div className="logo font-bold text-2xl">
          <span className="text-green-600 font-bold ">&lt;</span>
          Pass
          <span className="text-green-600 font-bold ">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-9">
            <a className="hover:font-semibold" href="/">
              Home
            </a>
            <a className="hover:font-semibold" href="#">
              About
            </a>
            <a className="hover:font-semibold" href="#">
              Contact Us
            </a>
          </li>
        </ul> */}
        <button className="text-white bg-green-700 hover:bg-green-600 my-5 rounded-full flex justify-between items-center hover:ring-1  ring-white " ><a href="">
          <img className="invert w-10 p-1 " src="/icons/github.png" alt="Github logo" />
          {/* <span className="font-bold px-2">Github</span> */}</a>

        </button>
      </div>
    </nav>
  );
};

export default Navbar;
