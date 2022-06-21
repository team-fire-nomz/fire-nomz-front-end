
import SignIn from './Components/SignIn';
import Layout from './Components/Layout';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import AddRecipe from "./Pages/AddRecipe";
import RecipeDetail from "./Components/RecipeDetail";
import useLocalStorageState from 'use-local-storage-state';
import axios from 'axios';


function App() {
  const [token, setToken] = useLocalStorageState('reactLibraryToken', '')
  const [username, setUsername] = useLocalStorageState(
    'reactLibraryUsername',
    ''
  )

  const setAuth = (username, token) => {
    setToken(token)
    setUsername(username)
  }

  const isLoggedIn = username && token

  const handleLogout = () => {
    axios
      .post(
        'https://bake-it-till-you-make-it.herokuapp.com/auth/token/logout/',
        {},
        {
          headers: { Authorization: `token ${token}` },
        }
      )
      .then((res) => {
        setAuth('', '')
      });
  }
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout} token={token} />}>
            <Route index element={<Homepage />} />
            <Route
              path="/signin"
              element={
                <SignIn
                  setAuth={setAuth}
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                />
              }
            ></Route>
            <Route path="/signup" element={<Register />} />
            <Route path="/addrecipe" element={<AddRecipe isLoggedIn={isLoggedIn} token={token}/>} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
