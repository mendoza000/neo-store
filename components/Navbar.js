import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={"ui__navbar"}>
      <ul className="ui__navbar-list">
        <li className="ui__navbar-item">
          <Link href={"/"}>
            <a className="ui__navbar-item-a">
              <Image
                src={require("@public/neoStore.svg")}
                width={"30rem"}
                heinght={"30rem"}
                alt={"neoStoreLogo"}
              />
            </a>
          </Link>
        </li>
        <li className="ui__navbar-item">
          <button className="ui__navbar-item-menu">
            <AiOutlineMenu />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
