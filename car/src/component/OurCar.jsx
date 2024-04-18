import CarCard from "../card/CarCard";
import { OUR_CAR } from "../data/Data";

export default function OurCar(){
    return(
        <section id="our-car" className=" p-20">
            <h2 className="text-heading font-bold text-2xl md:text-4xl text-center">Our Car</h2>

            <div className="max-w-screen-xl flex justify-around mx-auto flex-wrap p-6">
                {
                    OUR_CAR.map((cars) => (
                        <CarCard 
                        key={cars.name}
                        photo={cars.photo}
                        name={cars.name}
                        type={cars.type}
                        price={cars.price}
                        book={cars.book}/>
                    ))
                }
            </div>
        </section>
    )
}