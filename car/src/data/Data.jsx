import Icon1 from '../assets/NoOfVehicles.svg'
import Icon2 from '../assets/Customer.svg'
import Icon3 from '../assets/NoOfDriver.svg'
import Icon4 from '../assets/Experience.svg'

import Car1 from '../car/BMW.png'
import Car2 from '../car/Ford Raptor.png'
import Car3 from '../car/Jeep Wrangler.png'
import Car4 from '../car/Lamborghini.png'
import Car5 from '../car/McLaren.png'
import Car6 from '../car/Mercedes.png'
import Car7 from '../car/Honda.png'
import Car8 from '../car/Range Rover.png'


export const STATS_DATA = [
    {iconUrl: Icon1, count: "180", label:"Number of Vehicle"},
    {iconUrl: Icon2, count: "1M+", label:"Customer Served"},
    {iconUrl: Icon3, count: "150+", label:"No of Driver"},
    {iconUrl: Icon4, count: "25", label:"Years of Experience"},
]

export const FAQ =[
    {
        id  : '1',
        question: "How do I book a car rental?",
        answer:
          "To book a car rental, simply visit our website, enter your desired pickup location, dates, and times, select a vehicle, and complete the reservation process. Once confirmed, you'll receive a booking confirmation along with details about pickup instructions and any additional services you've selected.",
      },
      {
        id  : '2',
        question: "What documents do I need to rent a car?",
        answer:
          "You'll typically need a valid driver's license, a credit card in your name, and sometimes an additional form of identification like a passport or government-issued ID. These documents are necessary to verify your identity and payment method for the rental.",
      },
      {
        id  : '3',
        question: "What is included in the rental price?",
        answer:
          "The rental price usually covers the vehicle rental and basic insurance. Additional features like GPS or child seats may be available for an extra fee. It's important to review the inclusions and any optional extras before finalizing your reservation.",
      },
      {
        id  : '4',
        question: "Can I modify or cancel my reservation?",
        answer:
          "Yes, you can usually modify or cancel your reservation online or by contacting customer service. Be aware of any cancellation fees, and note that modifications may be subject to availability and any applicable rate changes.",
      },
      {
        id  : '5',
        question: "Are there any restrictions on where I can take the rental car?",
        answer:
          "Review your rental agreement for any restrictions, such as traveling out of the country or into specific areas. It's important to adhere to these restrictions to avoid any penalties or violations during your rental period.",
      },
]

export const OUR_CAR =[
  {photo: Car1 , name: 'BMW', type: 'Coupe', price: '$190/ per hr', book: 'Rent'},
  {photo: Car2 , name: 'FORD', type: 'Pickup Truck', price: '$180/ per hr', book: 'Rent'},
  {photo: Car3 , name: 'JEEP', type: 'SUV', price: '$160/ per hr', book: 'Rent'},
  {photo: Car4 , name: 'LAMBORGHINI', type: 'Supercar', price: '$250/ per hr', book: 'Rent'},
  {photo: Car5 , name: 'MCLAREN', type: 'Supercar', price: '$550/ per hr', book: 'Rent'},
  {photo: Car6 , name: 'MERCEDES', type: 'coupe', price: '$240/ per hr', book: 'Rent'},
  {photo: Car7 , name: 'HONDA', type: 'Sedan', price: '$100/ per hr', book: 'Rent'},
  {photo: Car8 , name: 'RANGE ROVER', type: 'SUV', price: '$210/ per hr', book: 'Rent'}
]





