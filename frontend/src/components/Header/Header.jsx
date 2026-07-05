import "./Header.css";

import { FaYoutube } from "react-icons/fa";
import { MdMenu, MdSearch, MdMic, MdNotificationsNone } from "react-icons/md";
import { FiPlusSquare } from "react-icons/fi";

import { useSidebar } from "../../context/SidebarContext";

function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="header">
      <div className="header-left">
        <MdMenu className="header-icon menu-icon" onClick={toggleSidebar} />

        <div className="logo">
          <FaYoutube className="youtube-logo" />
          <span>YouTube</span>
        </div>
      </div>

      <div className="header-center">
        <input type="text" placeholder="Search" className="search-input" />

        <button className="search-btn">
          <MdSearch />
        </button>

        <button className="mic-btn">
          <MdMic />
        </button>
      </div>

      <div className="header-right">
        <FiPlusSquare className="header-icon" />

        <MdNotificationsNone className="header-icon" />

        <button className="signin-btn">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
