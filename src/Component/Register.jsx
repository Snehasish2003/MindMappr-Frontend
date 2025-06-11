import { Facebook, Github, Instagram } from "lucide-react";

const Register = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4">
            <div className="max-w-4xl p-10 z-10 flex flex-col items-center justify-center space-y-16">

                {/* Headings */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                        Sign up for your Account
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">
                        MindMappr
                    </h2>
                </div>

                {/* Login Box */}
                <div className="w-full max-w-3xl p-10 border border-gray-400 rounded-lg flex flex-col items-center space-y-8">

                    {/* Login Text */}
                    <div className="flex text-xl md:text-2xl font-semibold text-foreground tracking-tighter">
                        <span>Create a MindMappr Account</span>

                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col w-full space-y-2 text-left text-lg">
                        <label htmlFor="name">Full name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder=""
                            className="w-full h-10 p-3 border-2 border-black text-gray-600 rounded-md"
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"

                            className="w-full h-10 p-3 border-2 border-black text-gray-600 rounded-md"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"

                            className="w-full h-10 p-3 border-2 border-black text-gray-600 rounded-md"
                        />
                    </div>

                    {/* Submit Button */}
                    <button className="w-full h-12 bg-primary text-foreground text-xl font-semibold rounded-md hover:opacity-90 transition">
                        Next
                    </button>

                    {/* Divider */}
                    <div className="flex items-center justify-center w-full text-sm text-gray-600">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="px-3 whitespace-nowrap">Other ways to login</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-6">
                        {[Facebook, Github, Instagram].map((Icon, index) => (
                            <div
                                key={index}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 cursor-pointer hover:bg-gray-100 transition"
                            >
                                <Icon size={24} className="text-foreground" />
                            </div>
                        ))}
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

                </div>
            </div>
        </section>
    );
}

export default Register;