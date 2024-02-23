import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";

export default function SignUp() {

    const [formData, setFormData]= useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate =useNavigate();

    const handleChange = (e) => {
        setFormData ({...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            return setErrorMessage('Please fill out all fields!');
        }
        try {
            setLoading(true);
            setErrorMessage(null);
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json(); // Parse the JSON response once
            setLoading(false); // Set loading state after parsing JSON
            
            if (res.ok) {
                console.log('Sign up successful!', data);
                // Do something with the successful response data
                // For example, you can redirect the user to another page
                // window.location.href = '/success-page';
            } else {
                console.error('Sign up failed:', res.statusText);
                // Handle failed response
                setErrorMessage(data.message); // Set error message from response data
            }
            setLoading(false);
            if(res.ok){
                navigate('/sign-in')
            }
            
        } catch (error) {
            console.error('An error occurred:', error.message);
            setErrorMessage('An error occurred. Please try again.'); // Set generic error message
            setLoading(false);
        }
    };
    
    
    
    

    return (
        <div className="min-h-screen mt-20">
            <div className="flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto">
                {/* Left Section */}
                <div className="md:w-1/2 md:pr-10">
                    <Link to='/' className="font-bold dark:text-white text-4xl block">
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-b-lg text-white">Sovandara</span> Blog
                    </Link>
                    <p className="text-sm mt-5">
                        Sovannara's blog is a treasure trove of new discoveries and insights, offering a captivating journey through his latest research findings. From the homepage's featured articles to the dedicated sections on various topics, visitors are invited to explore a world of knowledge at their fingertips.
                    </p>
                </div>
                {/* Right Section */}
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        {/* Username */}
                        <div>
                            <Label value='Your username'/>
                            <TextInput 
                                type="text"
                                placeholder="Username"
                                id='username' onChange ={handleChange}
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <Label value='Your Email'/>
                            <TextInput 
                                type="email"
                                placeholder="Email"
                                id='email' onChange ={handleChange}
                            /> 
                        </div>
                        {/* Password */}
                        <div>
                            <Label value='Your Password'/>
                            <TextInput 
                                type="password" 
                                placeholder="Password"
                                id='password' onChange ={handleChange}
                            />
                        </div>
                        {/* Sign Up Button */}
                        <Button gradientDuoTone='purpleToPink' type='submit' disabled ={loading}>
                            {
                                loading? (
                                    <>
                                    <Spinner size='sm'/>
                                    <span className="pl-3">loading...</span>
                                    </>
                                    
                                ): 'Sign Up'
                            }
                        </Button>
                    </form>
                    {/* Sign In Link */}
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Have an account?</span>
                        <Link to='/sign-in' className="text-blue-500">
                            Sign In
                        </Link>
                    </div>
                    {
    errorMessage && (
        <Alert className='mt-5' color='failure'>
            {errorMessage}
        </Alert>
    )
}

                </div>
            </div>
        </div>
    );
}
