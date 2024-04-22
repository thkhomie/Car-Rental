import parallaxImage from '../assets/LR.png';

export default function Banner(){
    return(
        <div 
            className="flex items-center justify-center w-full h-56 md:h-72 bg-fixed bg-cover"
            style={{backgroundImage: `url(${parallaxImage})`}}
        >
            <h1 className="text-2xl md:text-5xl font-semibold text-center text-[#FFF3B0] uppercase">"Drive  Explore  Enjoy!"</h1>
        </div>  
    )
}
