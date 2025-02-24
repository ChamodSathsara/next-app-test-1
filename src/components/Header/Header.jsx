import Link from "next/link";
import React from "react";

function Header() {
  const navLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "projects", link: "/projects" },
    { id: 5, name: "Login", link: "/login" },
  ];
  return (
    <div className="mb-10 bg-slate-500 w-screen flex flex-row justify-between ">
      {navLinks.map((item) => (
        <Link
          className="bg-green-400 p-2 m-3 font-semibold"
          href={item.link}
          key={item.id}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Header;
