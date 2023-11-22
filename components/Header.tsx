import React from "react";
import Logo from "./Logo";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header
      className={`flex justify-between items-center container h-[125px] z-50 relative`}
    >
      <Logo width={100} height={100} />
      <Navbar />
    </header>
  );
}
