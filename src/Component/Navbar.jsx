import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const navItems = [
        { name: "Contact Us", href: "/contactus" },
        // { name: "All Tasks", href: "/allTasks" },
        // { name: "Add Task", href: "#/addTasks" },
    ]

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handelScroll = () => {
        setIsScrolled(window.screenY > 10);
    }
    useEffect(() => {
        window.addEventListener("scroll", handelScroll);
        return window.removeEventListener("scroll", handelScroll);
    })
    return (
        <nav className={`fixed z-40 w-full transition-all duration-300 ${isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"}`}>
            <div className="flex justify-between  items-center container">
                <a href="/" className="text-2xl font-bold text-primary flex items-center ">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Mind</span>Mappr
                    </span>
                </a>
                {/* desktop Nav */}
                <div className="hidden md:flex space-x-8 mr-4">
                    {
                        navItems.map((nav, index) => (
                            <a key={index} href={nav.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{nav.name}</a>

                        ))
                    }
                     <button className="bg-primary rounded-xl w-30 hover:bg-primary/90 h-8 shadow-2xl " >Login</button>
                </div>

                {/*mobile Nav*/}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>
               <div
  className={`
    fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center
    transition-all duration-300 md:hidden
    ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
  `}
>
  <div className="flex flex-col space-y-8 text-xl">
    {navItems.map((nav, index) => (
      <a
        key={index}
        href={nav.href}
        className="text-foreground/80 hover:text-primary transition-colors duration-300"
      >
        {nav.name}
      </a>
    ))}

    <button className="bg-primary rounded-xl w-40 hover:bg-primary/90 h-8 shadow-2xl " >Login</button>
  </div>
</div>


            </div>

        </nav>
    );
}

export default Navbar;