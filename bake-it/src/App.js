import SignIn from './Components/SignIn';
import Layout from './Components/Layout';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import AddRecipe from "./Pages/AddRecipe";
import useLocalStorageState from 'use-local-storage-state';
import axios from 'axios';

function App() {
  const [token, setToken] = useLocalStorageState('reactQuestionboxToken', '')
  const [username, setUsername] = useLocalStorageState(
    'reactQuestionboxUsername',
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
        'https://questionbox-team-lightning.herokuapp.com/auth/token/logout',
        {},
        {
          headers: { Authorization: `token ${token}` },
        }
      )
      .then((res) => {
        setAuth('', '')
      })
  }

  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
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
            <Route path="/addrecipe" element={<AddRecipe />} />
          </Route>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
