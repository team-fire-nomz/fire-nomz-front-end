import Register from "./Components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Homepage from "./Pages/Homepage";


function App() {
 

  return (
    <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="signup" element={<Register />} />
          </Route>
        </Routes>
        
      </BrowserRouter>

  );
}

export default App;
