import React from "react";
import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";
const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((pizza, key) => {
          return (
            <MenuItem
              key={key}
              image={pizza.image}
              name={pizza.name}
              price={pizza.price}
            ></MenuItem>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
