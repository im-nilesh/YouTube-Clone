import "./Sidebar.css";

import { useNavigate } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import sidebarSections from "./SidebarData";

import { getMyChannel } from "../../services/channelServices";

function Sidebar({ isOpen }) {
  const navigate = useNavigate();

  async function handleYourChannel() {
    try {
      const channel = await getMyChannel();

      navigate(`/channel/${channel._id}`);
    } catch (error) {
      navigate("/create-channel");
    }
  }

  console.log(sidebarSections);

  return (
    <aside className={`sidebar ${isOpen ? "" : "sidebar-closed"}`}>
      {sidebarSections.map((section, index) => (
        <div className="sidebar-section" key={index}>
          {section.title && (
            <h3 className="sidebar-heading">{section.title}</h3>
          )}

          {section.items.map((item) => (
            <SidebarItem
              key={item.title}
              {...item}
              onClick={
                item.title === "Your Channel" ? handleYourChannel : undefined
              }
            />
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
