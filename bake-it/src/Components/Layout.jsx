import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";


export default function Layout(props) {
    return (
    <div>
        <NavBar
        	isLoggedIn={props.isLoggedIn}
        	handleLogout={props.handleLogout}
        	token={props.token}
        />
        <main><Outlet /></main>
    </div>


    );
}