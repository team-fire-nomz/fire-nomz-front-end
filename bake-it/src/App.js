import SignIn from './Components/SignIn';
import Layout from './Components/Layout';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="signup" element={<Register />}></Route>
      </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
