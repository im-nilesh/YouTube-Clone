import { NavLink } from "react-router-dom";

function SidebarItem({ title, path, icon: Icon }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "sidebar-item active" : "sidebar-item"
      }
    >
      <Icon className="sidebar-icon" />

      <span>{title}</span>
    </NavLink>
  );
}

export default SidebarItem;
