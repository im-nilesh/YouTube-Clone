import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import "./MainLayout.css";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    () => window.innerWidth > 768,
  );

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <>
      <Header onMenuClick={toggleSidebar} />

      <Sidebar isOpen={isSidebarOpen} />

      <ScrollToTop />

      <main
        className={`main-content ${isSidebarOpen ? "" : "sidebar-collapsed"}`}
      >
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
