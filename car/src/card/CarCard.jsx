import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function CarCard({photo, name, type, price ,book}){
    useEffect(() => {
        AOS.init(
            {duration: '2000'}
        )
    })
    return(
        <div className="min-w-48 flex flex-col items-center justify-center border-2 border-blue-300 rounded-md m-6 py-6 shadow-2xl">
            <div className="w-32 flex justify-center">
                <img src={photo} alt={name} className="" data-aos='zoom-in' />
            </div>
            <h2 className="text-2xl text-darkBlue font-medium m-4" data-aos='fade-right'>{name}</h2>
            <h3 className="text-sm text-lightBlue font-semibold m-2" data-aos='fade-left'>{type}</h3>
            <h3 className="text-sm md:text-md text-red-300 mt-1" data-aos='fade-right'>{price}</h3>

            <button className="text-white bg-yellow-300 rounded-md h-8 px-6 m-2 hover:bg-yellow-200 hover:text-heading" data-aos='fade-down'>{book}</button>
        </div>
    )
}