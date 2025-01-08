import React from "react";
import Logo from "../assets/logo.svg"

function Navbar() {
  return (
    <div className="w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
      <div className="logo">
        <img src={Logo} className="w-20 h-20"/>
      </div>
      <div className="links flex gap-10">
        {["Home", "Services", "about us", "Reports", "Contacts"].map((li, i) => {
          return <a className={`text-md capitalize font-light` }key={i} href="" >{li}</a>
        })}
      </div>
    </div>
    );
}

export default Navbar;
