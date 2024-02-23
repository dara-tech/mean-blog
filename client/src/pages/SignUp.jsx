import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <div className="min-h-screen mt-20">
            <div className="flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto">
                {/* Left Section */}
                <div className="md:w-1/2 md:pr-10"> {/* Adjust width and padding for larger screens */}
                    <Link to='/' className="font-bold dark:text-white text-4xl block">
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-b-lg text-white">Sovandara</span> Blog
                    </Link>
                    <p className="text-sm mt-5">
                        Sovannara's blog is a treasure trove of new discoveries and insights, offering a captivating journey through his latest research findings. From the homepage's featured articles to the dedicated sections on various topics, visitors are invited to explore a world of knowledge at their fingertips.
                    </p>
                </div>
                {/* Right Section */}
                <div className="md:w-1/2 mt-8 md:mt-0"> {/* Adjust width and margin for larger screens */}
                    <form className="flex flex-col gap-4">
                        {/* Username */}
                        <div>
                            <Label value='Your username'/>
                            <TextInput 
                                type="text"
                                placeholder="Username"
                                id='username'
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <Label value='Your Email'/>
                            <TextInput 
                                type="text"
                                placeholder="Email"
                                id='email'
                            /> 
                        </div>
                        {/* Password */}
                        <div>
                            <Label value='Your Password'/>
                            <TextInput 
                                type="password" 
                                placeholder="Password"
                                id='password'
                            />
                        </div>
                        <Button gradientDuoTone= 'purpleToPink'type='submit'>
                            Sign Up
                        </Button>

                    </form>
                    <div className=" flex gap-2 text-sm mt-5">
                        <span>Have an account?</span>
                        <Link to='/sign-in'className="text-blue-500">
                            Sign In
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}
