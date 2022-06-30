import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout(props) {

    return (
    <div>
        <NavBar
            isLoggedIn={props.isLoggedIn}
            handleLogout={props.handleLogout}
            token={props.token} />
        <main><Outlet /></main>
    </div>
    );
}
export default Layout;
