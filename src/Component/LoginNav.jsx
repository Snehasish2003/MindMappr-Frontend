const LoginNav =()=>{
    return (
        <nav className="z-40 w-full p-5"> 
            <div className="flex justify-between">
                <a href="/" className="text-2xl font-bold text-primary flex justify-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Mind</span>Mappr
                    </span>
                </a>

                <h1 className="text-2xl text-foreground hover:text-primary cursor-pointer">Contact Us</h1>
            </div>
        
        </nav>
    );
}

export default LoginNav;