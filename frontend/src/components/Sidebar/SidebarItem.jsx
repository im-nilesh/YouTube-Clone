import { NavLink, useLocation } from "react-router-dom";

function SidebarItem({ title, path, icon: Icon, onClick }) {
  const location = useLocation();

  // Your Channel
  if (onClick) {
    const isActive = location.pathname.startsWith("/channel/");

    return (
      <button
        type="button"
        onClick={onClick}
        className={isActive ? "sidebar-item active" : "sidebar-item"}
      >
        <Icon className="sidebar-icon" />
        <span>{title}</span>
      </button>
    );
  }

  // Dummy items
  if (!path) {
    return (
      <button type="button" className="sidebar-item">
        <Icon className="sidebar-icon" />
        <span>{title}</span>
      </button>
    );
  }

  // Working routes
  return (
    <NavLink
      to={path}
      end={path === "/"}
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
