import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import { Outlet } from "react-router";

const RootLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;