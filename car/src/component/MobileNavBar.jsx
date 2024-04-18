import Logo from '../assets/Logo.png'

export default function MobileNavBar({isMenuOpen, setIsMenuOpen}){

    const handleSelect = (sectionId) =>{
        if(isMenuOpen) setIsMenuOpen(false);
        document.getElementById(sectionId).scrollIntoView({behavior:'smooth'})
    }
    return(
        <div className="w-screen fixed top-0 z-20">
            <div className="w-1/2 h-screen flex flex-col p-8 bg-overAll">
            <img src={Logo} alt="company-logo" className=' w-32' />

                <ul>
                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('home')}>Home</a>
                    </li>

                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('why-autoquikly')}>Why AutoQuikly ?</a>
                    </li>

                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('our-car')}>Our car</a>
                    </li>

                    <li className="mb-5">
                        <a className="menu-item" onClick={() => handleSelect('faq')}>FAQ</a>
                    </li>
                </ul>

                <button className="h-10 bg-heading text-white text-sm px-6 rounded hover:bg-red-400 md:block">Contact Us</button>

                <div 
                className="w-screen h-screen bg-overlayBg fixed top-0 -z-10" 
                onClick={() => {setIsMenuOpen(false)}} />
            </div>
        </div>
    )
}