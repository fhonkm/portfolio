import { Outlet } from "react-router-dom";
import Nav from "../ui/Nav";
import Footer from "../ui/Footer";

function AppLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
