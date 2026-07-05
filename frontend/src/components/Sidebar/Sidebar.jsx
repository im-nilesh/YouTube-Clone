import "./Sidebar.css";

import SidebarItem from "./SidebarItem";
import sidebarSections from "./SidebarData";

function Sidebar() {
  return (
    <aside className="sidebar">
      {sidebarSections.map((section, index) => (
        <div className="sidebar-section" key={index}>
          {section.title && (
            <h3 className="sidebar-heading">{section.title}</h3>
          )}

          {section.items.map((item) => (
            <SidebarItem key={item.title} {...item} />
          ))}

          {index !== sidebarSections.length - 1 && (
            <div className="sidebar-divider" />
          )}
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
