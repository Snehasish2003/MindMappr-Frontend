import { useContext,createContext,useState,useEffect, Children } from "react";
import axios from "axios";
const UserContext = createContext();
export const UserProvider =({children})=>{
    const [user,setUser]= useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const token = localStorage.getItem("taskToken");
    useEffect(() => {
      const fetchUser = async()=>{
        try{
            const response = await axios.get("http://localhost:8084/user/details",{
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            }
            )
            console.log(response);
            setUser(response.data.data);
        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false);
        }
      };
      fetchUser();
    }, [token]);

    return (
        <UserContext.Provider value={{user,isLoading}}>
            {children}
        </UserContext.Provider>
    )

};
export const useUser = ()=> useContext(UserContext);