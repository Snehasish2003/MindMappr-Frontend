const ContactUs = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4">
            <div className="max-w-4xl mt-20 pt-10 z-10 flex flex-col items-center justify-center space-y-16">

                {/* Headings */}
                <div className="text-center space-y-4 tracking-wider">
                    <h1 className="text-4xl  md:text-6xl font-bold text-foreground">
                        Get in touch with us
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        MindMappr
                    </h2>
                </div>

                <div className=" bg-primary/30 w-screen">
                    {/* Login Box */}
                    <div className="mx-auto relative -top-12 max-w-3xl border border-gray-400 rounded-lg flex flex-col items-center">
                        <div className="w-full  bg-primary px-5 py-10 md:p-20 text-center space-y-6">
                            <h2 className="text-2xl md:text-4xl   font-bold text-white">Email our Support team</h2>
                            <div>
                                <h3 className="text-lg font-semibold  text-white">Let us know what we can help you with.</h3>
                                <h3 className="text-lg font-semibold text-white">Our team member will assist you as soon as possible.</h3>
                            </div>
                        </div>
                        <div className="w-full bg-white p-10 space-y-3 text-left">
                            <div className="flex flex-col md:flex-row space-y-3 justify-between  ">
                                <div className="flex flex-col items-start space-y-2">
                                    <label htmlFor="name">Full name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="First and Last name"
                                        className="w-full focus:outline-none focus:ring-2 focus:ring-primary/50 md:w-xs h-12 p-3 border-2 border-black text-gray-600 rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col items-start space-y-2">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="email@gmail.com"
                                        className="w-full focus:outline-none focus:ring-2 focus:ring-primary/50 md:w-xs  h-12 p-3 border-2 border-black text-gray-600 rounded-md"
                                    />
                                </div>

                            </div>
                            <div className="flex flex-col items-start space-y-2">

                            <label htmlFor="question">What is your question about</label>
                            <select
                                id="question"
                                defaultValue=""
                                className="w-full  h-12 p-3 border-2 border-black text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                                <option value="" disabled>Select your option</option>
                                <option value="general">General query</option>
                                <option value="technical">Technical issue</option>
                                <option value="billing">Billing</option>
                                <option value="feedback">Feedback</option>
                                <option value="other">Other</option>
                            </select>
                            <label htmlFor="tell">Tell us more</label>
                            <textarea
                                id="tell"
                                type="text"
                                placeholder="Enter your message here"
                                className="w-full focus:outline-none focus:ring-2 focus:ring-primary/50 h-30 p-3 border-2 border-black text-gray-600 rounded-md"
                            />
                            </div>
                            <div className="flex items-start space-x-2 tracking-tight">
                                <input
                                    id="agree-terms"
                                    type="checkbox"
                                    name="terms"
                                    required
                                    className="w-4 h-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary"
                                />
                                <label htmlFor="agree-terms" className="text-sm text-gray-700">
                                    I agree to MindMappr’s{' '}
                                    <a href="/terms" className="underline text-primary hover:text-primary-dark">
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href="/policy" className="underline text-primary hover:text-primary-dark">
                                        Privacy Policy
                                    </a>
                                    .
                                </label>

                            </div>
                            <div className="w-full text-center">
                                <button className="bg-primary h-12 rounded-xl w-1/2 transition-all hover:bg-primary/80 ">Send</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ContactUs;