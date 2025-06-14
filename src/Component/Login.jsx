import axios from "axios";
import { Facebook, Github, Instagram } from "lucide-react";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

const Login = () => {
  
  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });

  const handleFormData = (event)=>{
      const {name,value} = event.target;
      setFormData((prev)=>({
        ...prev,
        [name]:value,
      }));
  }

  const handleLogin = async()=>{
    try {
       const response = await axios.post("http://localhost:8084/user/login",formData);
    if(response.data.statusCode==200){
      localStorage.setItem("taskToken", response.data.data);
      navigate("/mindmappr");
    }else{
      console.log(response.data.message);
    }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl p-10 z-10 flex flex-col items-center justify-center space-y-16">
        
        {/* Headings */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            Login to your Account
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            MindMappr
          </h2>
        </div>

        {/* Login Box */}
        <div className="w-full max-w-xl p-10 border border-gray-400 rounded-lg flex flex-col items-center space-y-8">
          
          {/* Login Text */}
          <div className="flex text-xl md:text-2xl font-semibold text-foreground tracking-tighter">
            <span>Login or&nbsp;</span>
            <a href="/register" className="cursor-pointer underline">create an account</a>
          </div>

          {/* Email Input */}
          <div className="flex flex-col w-full space-y-2 text-left text-lg">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormData}
              placeholder="example@gmail.com"
              className="w-full h-10 p-3 border-2 border-black text-gray-600 rounded-md"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormData}
              placeholder="password"
              className="w-full h-10 p-3 border-2 border-black text-gray-600 rounded-md"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full hover:cursor-pointer h-12 bg-primary text-foreground text-xl font-semibold rounded-md hover:opacity-90 transition" onClick={handleLogin}>
            login
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center w-full text-sm text-gray-600">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="px-3 whitespace-nowrap">Other ways to login</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {[Facebook, Github, Instagram].map((Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 cursor-pointer hover:bg-gray-100 transition"
              >
                <Icon size={24} className="text-foreground" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
