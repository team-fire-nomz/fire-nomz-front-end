import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout(props) {

    return (
    <div style={{ backgroundImage:`url(${Image})`}}>
        <NavBar
        	isLoggedIn={props.isLoggedIn}
        	handleLogout={props.handleLogout}
        	token={props.token}
        />
        <main><Outlet /></main>
    </div>
    );
}
export default Layout;
