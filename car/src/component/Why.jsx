import Tesla from '../assets/Tesla.png';
import Pp1 from '../assets/Trophy.svg';
import Pp2 from '../assets/Road.svg';
import Pp3 from '../assets/PriceTag.svg';
import Pp4 from '../assets/Service.svg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Why() {
    useEffect(() => {
        AOS.init({
            duration: '2000'
        });
    }, []);

    return (
        <section id='why-autoquikly' aria-label="section" className="bg-cover bg-no-repeat text-center p-20 m-6 flex justify-center items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-cover bg-no-repeat">
                <div className="flex flex-col justify-center items-center bg-cover bg-no-repeat">
                    <h2 className="text-heading font-bold text-2xl md:text-4xl text-center mb-10" data-aos='fade-down'>Why AutoQuikly ?</h2>
                    <div className="lg:flex justify-center lg:items-start">
                        <div className="lg:w-1/3 mb-10 lg:mb-0 flex flex-col justify-center items-center">
                            <div className="invert:p-small mb-20">
                                <img data-aos='fade-right' src={Pp1} alt="Icon" className="inline-block mr-2 h-12 lg:h-16" />
                                <div data-aos='fade-right'>
                                    <h4 className="text-blue-900 font-semibold">24-hour Customer Service</h4>
                                    <p>We promise impeccable service by promptly addressing your queries and problems through our dedicated 24/7 customer support team.</p>
                                </div>
                            </div>
                            <div className="invert:p-small mb-20">
                                <img data-aos='fade-right' src={Pp2} alt="Icon" className="inline-block mr-2 h-12 lg:h-16" />
                                <div data-aos='fade-right'>
                                    <h4 className="text-blue-900 font-semibold">ISO Certification</h4>
                                    <p>We are an ISO 9001, ISO 14001, and ISO 45001 certified car rental company with 20+ years of service excellence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-2/3 mb-14 lg:mb-0 flex justify-center items-center">
                            <img
                                data-aos='zoom-in'
                                alt="banner"
                                loading='lazy'
                                src={Tesla}
                                className="max-w-full"
                            />
                        </div>
                        <div className="lg:w-1/3 mb-10 lg:mb-0 flex flex-col justify-center items-center">
                            <div className="invert:p-small mb-20">
                                <img data-aos='fade-left' src={Pp3} alt="Icon" className="inline-block mr-2 h-12 lg:h-16" />
                                <div data-aos='fade-left'>
                                    <h4 className="text-blue-900 font-semibold">Own Dedicated Workshop</h4>
                                    <p>We ensure impeccable fleet management, with regular inspections for optimal vehicle performance and customer satisfaction.</p>
                                </div>
                            </div>
                            <div className="invert:p-small mb-20">
                                <img data-aos='fade-left' src={Pp4} alt="Icon" className="inline-block mr-2 h-12 lg:h-16" />
                                <div data-aos='fade-left'>
                                    <h4 className="text-blue-900 font-semibold">All Over Service</h4>
                                    <p>Our service spans in all countries, ensuring accessibility for your transportation needs nationwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

