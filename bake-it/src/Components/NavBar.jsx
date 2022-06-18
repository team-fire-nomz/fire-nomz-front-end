import { Link } from "react-router-dom";


const NavBar = ({ handleLogout, isLoggedIn }) => {
  return (
    <header>
      <div>Bake It Till You Make It</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
        
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;