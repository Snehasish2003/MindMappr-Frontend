import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ToggleTheme = ()=>{
    const [isDarkMode , setDarkMode] = useState(false);

    const toggleTheme = ()=>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }
    return(
        <button onClick={toggleTheme} className="fixed max-sm:hidden z-50 p-2 rounded-full  transition-colors duration-300   top-3 right-5">
            {
                isDarkMode ? 
                (<Sun className=" h-6 w-6 text-yellow-600" />)
                :(<Moon className="h-6 w-6 text-blue-600" />)
            }
        </button>
    )
}

export default ToggleTheme;