import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Menu from "../TempMenu/Menu";
import "./../../styles/global.scss";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
