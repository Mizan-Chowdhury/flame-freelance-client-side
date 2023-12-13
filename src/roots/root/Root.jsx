import { Outlet } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Footer from "../../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <MainLayout></MainLayout>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
