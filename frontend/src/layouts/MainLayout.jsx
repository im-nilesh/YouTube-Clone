import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import "./MainLayout.css";

function MainLayout() {
  return (
    <>
      <Header />

      <Sidebar />

      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
