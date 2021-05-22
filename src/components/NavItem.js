import { NavLink } from "react-router-dom";

export const NavItem = ({ route, text }) => {
  return (
    <NavLink
      exact
      activeClassName="navbar__item--active"
      className="navbar__item"
      to={route}
    >
      {text}
    </NavLink>
  );
};
