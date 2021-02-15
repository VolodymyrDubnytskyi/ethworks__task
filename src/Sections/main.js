import React from "react";
import logo from "../assets/logo.svg";
const menu = [
  { id: 1, name: "ICO" },
  { id: 2, name: "Team" },
  { id: 2, name: "Contact" },
];

const Main = (props) => {
  return (
    <div className="main">
      <nav className="nav">
        <div className="__wrapper container">
          <img src={logo} alt="logo" className="__logo" />
          <ul className="__menu">
            {menu.map((item) => {
              const { id, name } = item;
              return (
                <li key={id} className="__item">
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <header className="header"></header>
    </div>
  );
};
export default Main;
