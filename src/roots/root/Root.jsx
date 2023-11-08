import { Outlet } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";

const Root = () => {
    return (
        <div className="min-h-screen">
            <MainLayout>
                <Outlet></Outlet>
            </MainLayout>
        </div>
    );
};

export default Root;