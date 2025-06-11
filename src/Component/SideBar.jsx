import {
  Bell,
  Calendar1,
  CalendarCheck,
  ChevronDown,
  Filter,
  Menu,
  PanelRight,
  Plus,
  Search,
  User,
} from "lucide-react";
import { useState } from "react";

// Sidebar item component
const SidebarItem = ({ item, isSelected, onClick }) => (
  <span
    role="button"
    tabIndex={0}
    onClick={() => onClick(item.name)}
    className={`flex items-center space-x-3 py-2 px-3 duration-700 rounded-lg cursor-pointer transition hover:bg-white/70 ${
      isSelected === item.name ? "text-black font-semibold bg-white" : "bg-primary"
    }`}
  >
    <item.icon size={24} className={isSelected === item.name ? "text-black" : ""} />
    <h3 className="text-lg">{item.label}</h3>
  </span>
);

const Sidebar = ({isSelected,isSidebarOpen,setIsSelected,setIsSidebarOpen}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const items = [
    { label: "Add task", name: "addTask", icon: Plus },
    { label: "Search", name: "search", icon: Search },
    { label: "Today", name: "today", icon: Calendar1 },
    { label: "Upcoming", name: "upcoming", icon: CalendarCheck },
    { label: "Filters", name: "filter", icon: Filter },
  ];

  const toggleSidebar = () => {setIsSidebarOpen(!isSidebarOpen); setIsProfileOpen(false) };
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <aside className="fixed flex-shrink-0 w-90 min-h-screen max-w-sm z-40">
      {!isSidebarOpen && (
        <Menu
          size={24}
          onClick={toggleSidebar}
          className="m-5 absolute cursor-pointer z-60"
        />
      )}

      <div
        className={`container text-white p-4 shadow-md min-h-screen bg-primary z-40 transform transition-transform duration-500 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div
            className="flex items-center space-x-1 cursor-pointer"
            onClick={toggleProfile}
          >
            <User size={24} />
            <h1 className="text-lg font-bold">Subhsne</h1>
            <ChevronDown size={24} />
          </div>
          {/* profile */}
          {isProfileOpen && (
            <div className="absolute  left-15 top-1 mt-14 w-48 rounded-xl bg-primary border-2 border-white p-2 shadow-lg z-50">
              <h3 className="text-lg cursor-pointer px-3 py-1 hover:text-xl">View Profile</h3>
              <div className="border-t border-gray-300 my-1"></div>
              <h3 className="text-lg cursor-pointer px-3 py-1 hover:text-xl">Logout</h3>
            </div>
          )}

          <div className="flex space-x-2">
            <Bell size={24} className="cursor-pointer hover:size-7.5 transition duration-800" />
            <PanelRight size={24} onClick={toggleSidebar} className="cursor-pointer hover:size-7.5" />
          </div>
        </div>

        {/* Sidebar Items */}
        <div className="space-y-2 my-5">
          {items.map((item) => (
            <SidebarItem
              key={item.name}
              item={item}
              isSelected={isSelected}
              onClick={setIsSelected}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
