import { NavLink } from "react-router-dom";

function SidebarItem({ title, path, icon: Icon, onClick }) {
  if (onClick) {
    return (
      <button className="sidebar-item" onClick={onClick}>
        <Icon className="sidebar-icon" />
        <span>{title}</span>
      </button>
    );
  }

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
