import "./Header.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import {
  MdMenu,
  MdSearch,
  MdKeyboardVoice,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

import { getMyChannel } from "../../services/channelServices";

function Header({ onMenuClick }) {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate("/");
  }

  function handleSearch() {
    if (!search.trim()) return;

    navigate(`/?search=${search}`);
  }

  async function handleMyChannel() {
    try {
      const channel = await getMyChannel();

      navigate(`/channel/${channel._id}`);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      navigate("/create-channel");
    }
  }

  return (
    <header className="header">
      {/* Left */}

      <div className="header-left">
        <button className="icon-btn" onClick={onMenuClick}>
          <MdMenu className="header-icon" />
        </button>

        <Link to="/" className="logo">
          <FaYoutube className="youtube-logo" />
          <span className="logo-text">YouTube</span>
        </Link>
      </div>

      {/* Center */}

      <div className="header-center">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button className="search-btn" onClick={handleSearch}>
            <MdSearch />
          </button>
        </div>

        <button className="icon-btn mic-btn">
          <MdKeyboardVoice className="header-icon" />
        </button>
      </div>

      {/* Right */}

      <div className="header-right">
        <button
          className="icon-btn"
          onClick={() => navigate("/upload")}
          title="Upload Video"
        >
          <FiPlus className="header-icon" />
        </button>

        <button className="icon-btn">
          <MdOutlineNotificationsNone className="header-icon" />
        </button>

        {user ? (
          <>
            <span
              className="username"
              onClick={handleMyChannel}
              style={{ cursor: "pointer" }}
              title="Go to your channel"
            >
              {user.username}
            </span>

            <button className="signin-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="signin-btn" onClick={() => navigate("/login")}>
            Sign in
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
