import "./Sidebar.css";

import SidebarItem from "./SidebarItem";
import { sidebarSections } from "../../constants/sidebarData";

import { useSidebar } from "../../context/SidebarContext";

function Sidebar() {
  const { collapsed } = useSidebar();

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {sidebarSections.map((section, index) => (
        <div key={index}>
          {!collapsed && section.title && (
            <p className="sidebar-heading">{section.title}</p>
          )}

          {section.items.map((item) => (
            <SidebarItem key={item.title} collapsed={collapsed} {...item} />
          ))}

          {!collapsed && index !== sidebarSections.length - 1 && (
            <hr className="sidebar-divider" />
          )}
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
