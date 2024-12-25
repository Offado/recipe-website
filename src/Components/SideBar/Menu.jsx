import React from "react";
import "./menu.css";
import { Link } from "react-router";

const Menu = ({ links, close }) => {
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => {
        return (
          <Link className="link" to={link.path} key={link.name}>
            {link.icon}
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
