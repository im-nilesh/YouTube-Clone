import { NavLink } from "react-router-dom";

function SidebarItem({ icon: Icon, title, path, collapsed }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "sidebar-item active" : "sidebar-item"
      }
    >
      <span className="sidebar-icon">
        <Icon />
      </span>

      {!collapsed && <span className="sidebar-title">{title}</span>}
    </NavLink>
  );
}

export default SidebarItem;
