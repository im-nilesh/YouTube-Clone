import "./Header.css";

import {
  MdMenu,
  MdSearch,
  MdKeyboardVoice,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      {/* Left */}

      <div className="header-left">
        <button className="icon-btn">
          <MdMenu className="header-icon" />
        </button>

        <a href="/" className="logo">
          <FaYoutube className="youtube-logo" />

          <span className="logo-text">YouTube</span>
        </a>
      </div>

      {/* Center */}

      <div className="header-center">
        <div className="search-wrapper">
          <input type="text" placeholder="Search" className="search-input" />

          <button className="search-btn">
            <MdSearch />
          </button>
        </div>

        <button className="icon-btn mic-btn">
          <MdKeyboardVoice className="header-icon" />
        </button>
      </div>

      {/* Right */}

      <div className="header-right">
        <button className="icon-btn">
          <FiPlus className="header-icon" />
        </button>

        <button className="icon-btn">
          <MdOutlineNotificationsNone className="header-icon" />
        </button>

        <button className="signin-btn">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
