import Insta from '../assets/Insta.svg'
import Fb from '../assets/Fb.svg'
import YT from '../assets/YT.svg'
import Twitter from '../assets/Twitter.svg'
import PlayStore from '../assets/PlayStore.svg'
import AppStore from '../assets/AppStore.svg'
import { Link } from 'react-scroll'

export default function SocialMedia() {
    return (
        <div>
            <div className=" flex justify-center gap-6">
                <img src={Insta} alt="insta" className='w-8 h-8' />
                <img src={Fb} alt="fb" className='w-8 h-8' />
                <img src={YT} alt="yt" className='w-8 h-8' />
                <img src={Twitter} alt="twitter" className='w-8 h-8' />
            </div>

            <h4 className='text-red-400 text-semibold text-center p-3'>FOLLOW US </h4>


            <div className="flex justify-between items-center">
                <nav className="mx-auto px-6 text-center">
                    <ul className=" list-none md:flex gap-14">
                    <li>
                            <Link to='home' smooth spy offset={-80} className="footer-menu-item">Home</Link>
                        </li>
                        <li>
                            <Link to='why-autoquikly' smooth spy offset={-80} className="footer-menu-item">Why AutoQuikly ?</Link>
                        </li>
                        <li>
                            <Link to='our-car' smooth spy offset={-80} className="footer-menu-item">Our Car</Link>
                        </li>
                        <li>
                            <Link to='faq' smooth spy offset={-80} className="footer-menu-item">FAQ</Link>
                        </li>
                    </ul>

                </nav>
            </div>
            <div className="flex justify-center items-center gap-14">
                <img src={PlayStore} alt="download-app" className="w-32 h-32" />
                <img src={AppStore} alt="download-app" className="w-32 h-32" />
            </div>

        </div>
    )
}