import { Button, TextInput } from 'flowbite-react';
import { useSelector } from 'react-redux';
export default function DashProfile() {
    const {currentUser} = useSelector(state => state.user)
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
        <h1 className=' my-7 text-center font-semibold text-3xl'>profile</h1>
    <form className='flex flex-col gap-4 '>
        <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
         <img src={currentUser.profilesPicture} alt=' user ' className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'/>
    </div>
    <TextInput type='text' id='username' placeholder='username'
    defaultValue={currentUser.username} />
     <TextInput type='eamil' id='email' placeholder='email'
    defaultValue={currentUser.eamil} />
     <TextInput type='password' id='' placeholder='password'
    />
    <Button type='summit' gradientDuoTone='purpleToBlue' outline>
     Update
    </Button>

       
    </form>
    <div className='text-red-500 flex justify-between mt-5'>
        <span>Delete Account</span>
        <span>Sign Out</span>
    </div>
    
    </div>
  )
}