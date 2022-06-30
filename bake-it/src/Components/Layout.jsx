import NavBar from "./NavBar";
import WithoutNavBar from "./WithoutNavBar";
import Footer from "./Footer";
import SignIn from "./SignIn";

function Layout(props) {

    return (
    <div>
        {props.isLoggedIn ? (
        <>
        <NavBar
                    isLoggedIn={props.isLoggedIn}
                    handleLogout={props.handleLogout}
                    token={props.token} />
        </>
        ):(
        <>
            <WithoutNavBar />
            <SignIn />
        </>
        )}
        <Footer />
    </div>
    );
}
export default Layout;
