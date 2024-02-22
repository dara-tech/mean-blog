import { Button, Navbar, NavbarToggle, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/Fa'

export default function Header() {
    const path = useLocation().pathname;
    return (
    <Navbar className="border-b-2">
        <Link to='/'className="self-center whitespace-nowrap text-sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-b-lg text-white">Sovandara</span>
            blog
        </Link>
        <form action="">
            <TextInput
            type="text"
            placeholder="Search"
            rightIcon={AiOutlineSearch}className='hidden lg:inline'
            />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
            <AiOutlineSearch/>
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button className="w-12 h-10 hidden sm:inline" color='gray' pill>
                <FaMoon/>
            </Button>
            <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue'>
                Sign In
            </Button>
            </Link>
            <NavbarToggle/>
        </div>
            <Navbar.Collapse>
                <Navbar.Link active={path ==='/'} as={'div'}>
                    <Link to ='/home'>
                        Home
                    </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path ==='/about'} as={'div'}>
                    <Link to ='/about'>
                        About
                    </Link>
                    </Navbar.Link >
                    <Navbar.Link  active={path ==='/projects'}as={'div'}>
                    <Link to ='/projects'>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        
    </Navbar>

    )
}