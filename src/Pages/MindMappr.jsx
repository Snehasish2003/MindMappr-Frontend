import { useState } from "react";
import Sidebar from "../Component/SideBar";
import Today from "../Component/Today";
import ToggleTheme from "../Component/ToggleTheme";
import Addicon from "../Component/Addicon";


const MindMappr = () => {
    
    

    const [isSelected, setIsSelected] = useState("Today");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const renderComponent = () => {
        switch (isSelected) {
            case "today":
                return <Today />;
            case "search":
                return <Search />;
            case "addTask":
                return <AddTask />;
            case "upcoming":
                return <Upcoming  />;
            case "filter":
                return <Filter  />;
            default:
                return <Today  />;
        }
    };
    return (
        <>
            <ToggleTheme />
            <div className="flex min-h-screen">
                <Sidebar  isSelected={isSelected} setIsSelected={setIsSelected} setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
                <div
                    className={`transition-all duration-500 ease-in-out w-full ${isSidebarOpen ? "md:ml-[22rem]" : "ml-0"
                        }`}
                >
                    {renderComponent()}
                </div>
            </div>
            <Addicon />
        </>
    );
}

export default MindMappr;