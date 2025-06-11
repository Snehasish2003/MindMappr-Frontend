import { ClipboardList, RefreshCcw, BadgeCheck, BarChart3 } from 'lucide-react';

const SecondHeroSection = ()=>{

    const fetures = [
        {
            image:ClipboardList,
            name:"Everyone stays aligned with daily goals",
            description:"Easily track and manage your learning schedule so you’re always moving toward your targets—without overwhelm.",
        },
        {
            image:RefreshCcw,
            name:" Tasks reshuffled daily to keep you engaged",
            description:" Our AI smartly reorders tasks every day to avoid monotony and maximize your focus and productivity.",
        },
        {
            image:BadgeCheck,
            name:"Stay accountable and build consistency",
            description:"Get challenged daily and track streaks—perfect for building habits that actually stick.",
        },
        {
            image:BarChart3,
            name:"Prioritize what matters most",
            description:" With intelligent sorting and progress insights, you always know what to focus on next for steady growth.",
        }
    ]
    return (
        <section className=" bg-primary/50 py-20 relative min-h-screen px-4 flex justify-center items-center flex-col">
                <div className="container  max-w-4xl mx-auto text-center z-10  ">
                <div className="space-y-6 flex flex-col gap-2">
                     <h2 className="text-foreground font-bold text-3xl md:text-5xl m-0 tracking-tight ">Make learning more</h2>
                     <span className="text-foreground m-0 font-bold text-3xl md:text-5xl tracking-tight "> dynamic, personalized,and </span>
                     <h2 className="text-foreground m-0 text-3xl font-bold md:text-5xl tracking-tight "> goal-driven</h2>
                   </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mt-15 max-w-5xl mx-auto">
                    {
                        fetures.map((item,index)=>(
                            <div key={index} className='flex gap-3 flex-col justify-center items-center md:items-start'>
                            <item.image size={60} />
                                <h3 className="text-center md:text-left font-bold text-3xl">
                                    {item.name}
                                </h3>

                                <p className="text-center md:text-left text-lg  ">{item.description}</p>
                            </div>
                        ))
                    }

                </div>
        </section>
    );
}

export default SecondHeroSection;