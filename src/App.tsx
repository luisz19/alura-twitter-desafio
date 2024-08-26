import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home.tsx'
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import SignUpComponent from "./components/SignUpComponent.tsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  </Router>
  )
   
    

}

export default App
