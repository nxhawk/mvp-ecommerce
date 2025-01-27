import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="pt-12 bg-gray-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
