import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout(props) {

    return (
    <div style={{ backgroundImage:`url(${Image})`}}>
        <NavBar
        	isLoggedIn={props.isLoggedIn}
        	handleLogout={props.handleLogout}
        	token={props.token}
        />
        <main><Outlet /></main>
        <Footer />
    </div>
    );
}
export default Layout;
