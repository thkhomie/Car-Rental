import { useState } from 'react'
import { RiMenu4Line, RiCloseFill } from 'react-icons/ri'
import MobileNavBar from './MobileNavBar'
import { Link } from 'react-scroll'
import Logo from '../assets/Logo.png'
export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            {isMenuOpen && <MobileNavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}

            <div className='bg-overAll sticky top-0 z-10'>
            
            <nav className='max-w-screen-xl mx-auto py-4 px-6'>
                <div className="flex justify-between items-center">
                    <img src={Logo} alt="company-logo" className=' w-32' />

                    <ul className="list-none hidden md:flex md:gap-14">     {/*mobile md*/}
                        <li>
                            <Link to='home' smooth spy offset={-80} className="menu-item">Home</Link>
                        </li>
                        <li>
                            <Link to='why-autoquikly' smooth spy offset={-80} className="menu-item">Why AutoQuikly ?</Link>
                        </li>
                        <li>
                            <Link to='our-car' smooth spy offset={-80} className="menu-item">Our Car</Link>
                        </li>
                        <li>
                            <Link to='faq' smooth spy offset={-80} className="menu-item">FAQ</Link>
                        </li>
                    </ul>

                    <button className='hidden h-10 bg-heading text-white text-sm px-6 rounded hover:bg-red-400 md:block'>Contact Us</button>

                    <button onClick={() => {setIsMenuOpen(true)}} className='w-11 h-11 bg-blue-100 text-2xl flex items-center justify-center rounded md:hidden'>
                        {isMenuOpen ? <RiCloseFill/> :<RiMenu4Line />}
                    </button>
                </div>


            </nav>
        </div>
        </>
    )
}