import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
// import Jobcard from "../../pages/jobcard";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="flex">
        <Sidebar className="bg-backColor" isOpen={isSidebarOpen} />
        <div
          className={`flex-1 ${
            isSidebarOpen ? "ml-[250px]" : ""
          } transition-all duration-300`}
        >
          <Header toggleSidebar={toggleSidebar} />

          <main>
            
            <Outlet />{
            }
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
