import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import Loginpage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ContactUsPage from "./Pages/ContactUsPage";
import Sidebar from "./Component/SideBar";
import MindMappr from "./Pages/MindMappr";
import { UserProvider } from "./Context/UserContext";

const App = ()=>{
  return (
        <UserProvider>
      <BrowserRouter>
        <Routes>

          <Route index element={<Home />} />
          <Route path="/login" element={<Loginpage />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/contactus" element={<ContactUsPage />}/>
          <Route path="/contactus" element={<ContactUsPage />}/>
          <Route path="/mindmappr" element={<MindMappr />}/>
        </Routes>
      </BrowserRouter>  
        </UserProvider>
  );
}

export default App;