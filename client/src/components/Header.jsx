import { Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, Navbar, NavbarToggle, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa'; // Corrected typo here
import { useSelector , useDispatch} from 'react-redux'; // Corrected typo here
import { toggleTheme } from "../redux/theme/themeSilice";

export default function Header() {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
   
    const { currentUser } = useSelector(state => state.user); // Corrected typo here
    const {theme} = useSelector (state => state.theme);
    return (
        <Navbar className="border-b-2">
            <Link to='/' className="self-center whitespace-nowrap text-sm:text-xl font-semibold dark:text-white">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-b-lg text-white">Sovandara</span>
                Blog
            </Link>
            <form action="">
                <TextInput
                    type="text"
                    placeholder="Search"
                    rightIcon={AiOutlineSearch} className='hidden lg:inline'
                />
            </form>
            <Button className="w-12 h-10 lg:hidden" color="gray" pill>
                <AiOutlineSearch />
            </Button>
            <div className="flex gap-2 md:order-2">
                <Button className="w-12 h-10 hidden sm:inline" color='gray' pill 
                onClick={()=>dispatch(toggleTheme())}>
                   {theme === 'light'? <FaSun/> : <FaMoon/>}
                </Button>
                {currentUser ? (
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt='user'
                                img={currentUser.profilePicture} // Corrected typo here
                                rounded
                                />
                        }
                    >
                        <DropdownHeader>
                            <span className="block text-sm ">
                                @{currentUser.username}
                            </span>
                            <span className="block text-sm font-medium truncate">
                                {currentUser.email}
                            </span>
                        </DropdownHeader>
                        <Link to='/dashboard?tab=profile'> {/* Corrected spacing in query parameter */}
                            <Dropdown.Item>Profiles</Dropdown.Item>
                        </Link>
                        <DropdownDivider/>
                        <Dropdown.Item>Sign Out</Dropdown.Item>
                    </Dropdown>
                ) :
                    <Link to='/sign-in'>
                        <Button gradientDuoTone='purpleToBlue' outline>
                            Sign In
                        </Button>
                    </Link>
                }
                <NavbarToggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === '/'} as={'div'}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/about'} as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/projects'} as={'div'}>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
