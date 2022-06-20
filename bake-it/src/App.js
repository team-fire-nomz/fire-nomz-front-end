
import SignIn from './Components/SignIn';
import Layout from './Components/Layout';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import AddRecipe from "./Pages/AddRecipe";


function App() {
 

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="signup" element={<Register />} />
          <Route path="addrecipe" element={<AddRecipe />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
