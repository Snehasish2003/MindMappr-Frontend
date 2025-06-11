import  heroimage from "../assets/image.png";

const HeroSection = ()=>{
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center md:flex-row px-4 space-y-10 ">
                {/* <div className=""> Master Your Tasks, One Challenge at a Time</div>
                <div className=""></div>     */}
                <div className="container max-w-4xl mx-auto text-center z-10 flex justify-center items-center">
                    <div className="space-y-6">
                        <h1 className="text-3xl slide-in-left tracking-tight md:text-5xl font-bold ">
                            <span className=" text-primary">
                              Smarter
                            </span> {" "} Schedules. 
                         </h1>
                         <h1 className="text-xl slide-in-right tracking-tight md:text-2xl font-bold ">
                            <span className="">
                              Add your goals, track your progress, and let AI challenge you daily
                            </span> 
                         </h1>
                         <button className="bg-primary rounded-2xl w-40 h-12 cursor-pointer animate-bounce delay-300">
                            Get Started
                         </button>
                    </div>
                </div>
                <div className="container max-w-4xl mx-auto z-10 flex justify-center items-center">
                    <div className="space-y-6">
                    <div className="rounded-full w-60 h-60 md:w-120 md:h-120 bg-primary/90 shadow-2xl ">

                        <img src={heroimage} className="w-30 h-60 md:w-60 md:h-120 mx-auto animate-float" alt="heroimage" />

                    </div>
                    </div>
                </div>
        </section>
    );
}

export default HeroSection;