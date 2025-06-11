import { Copyright, Earth, Facebook, FacebookIcon, Github, Globe, Instagram, Linkedin, Twitter, WholeWord, Youtube } from "lucide-react";

const FooterSection = ()=>{
    return (
            <section className=" bg-gray-100 relative min-h-20 px-4 flex justify-center items-center flex-col ">
                <div className="container max-w-6xl  md:mx-auto p-5 z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 text-left py-8 md:py-15 space-y-8 ">
                            <div className="">
                                <h1 className="font-bold text-2xl md:text-4xl text-primary transition-colors delay-300">Snehasish Sahoo</h1>
                            </div>
                            <div className="flex md:justify-end  space-x-5">
                                <div className="rounded-full w-8 h-8 flex justify-center cursor-pointer items-center">
                                <Facebook size={24} className="text-foreground"/>
                                </div>
                                <div className="rounded-full w-8 h-8 flex justify-center cursor-pointer items-center">
                                <Instagram size={24} className="text-foreground"/>
                                </div>
                                <div className="rounded-full w-8 h-8  flex justify-center cursor-pointer items-center">
                                <Github size={24} className="text-foreground"/>
                                </div>
                                <div className="rounded-full w-8 h-8  flex justify-center cursor-pointer items-center">
                                <Twitter size={24} className="text-foreground"/>
                                </div>
                                <div className="rounded-full w-8 h-8   flex justify-center cursor-pointer items-center">
                                <Linkedin size={24} className="text-foreground"/>
                                </div>
                                <div className="rounded-full w-8 h-8  flex justify-center cursor-pointer items-center">
                                <Youtube size={24} className="text-foreground"/>
                                </div>

                                
                            </div>
                            <div className=" flex items-start space-x-2">
                               <Globe size={24}  />
                               <h3 className="text-lg ">English</h3>
                            </div>

                            <div className="flex md:flex-row flex-col space-y-4 items-start justify-end space-x-6">
                                <h3 className="text-md"> Privacy Policy</h3>
                                <h3 className="text-md"> Terms of Service</h3>
                                <div className="flex  items-center"><Copyright size={15} /> <h3 className="text-md">All rights Reserved</h3></div>
                            </div>
                    </div>
                </div>
            </section>
    );
}
export default FooterSection;