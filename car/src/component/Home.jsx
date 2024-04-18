import React, { useState } from "react";
import H1 from '../assets/H1.png';
import CarDriverImage from '../assets/CarDriver.svg';
import CarImage from '../assets/Car.svg';

export default function Home() {
    const [rentalOption, setRentalOption] = useState('car');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleOptionChange = (e) => {
        setRentalOption(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            rentalOption,
            startDate,
            startTime,
            endDate,
            endTime,
        };

        if (!rentalOption || !startDate || !startTime || !endDate || !endTime) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            console.log('Form submitted successfully');
            // Reset form fields
            setRentalOption('car');
            setStartDate('');
            setStartTime('');
            setEndDate('');
            setEndTime('');
        } catch (error) {
            console.error('Error submitting form:', error.message);
            // Handle error
        }
    };

    return (
        <section id='home'>
            <div className="relative">
                <img src={H1} alt="wallpaper" className="w-screen h-screen" />

                <div className="absolute top-12 md:top-60">
                    <h3 className="text-sm md:text-2xl text-white space-x-3 font-bold leading-6 p-10">"Find Your Perfect Ride: <br /> Explore Our Fleet of Vehicles Today!"</h3>
                </div>
                <div className="flex items-center p-3 absolute top-40 md:top-96 md:right-44 lg:top-60 right-[5px] lg:right-32">
                    <form onSubmit={handleSubmit} className="md:w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Rental Option:
                            </label>
                            <div className="flex items-center">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="car"
                                        checked={rentalOption === 'car'}
                                        onChange={handleOptionChange}
                                        className="form-radio h-5 w-5 text-blue-600"
                                        required
                                    />
                                    <img src={CarImage} alt="Car" className="w-6 h-6 ml-2" />
                                    <span className="ml-2">Rent a Car</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input
                                        type="radio"
                                        value="driver"
                                        checked={rentalOption === 'driver'}
                                        onChange={handleOptionChange}
                                        className="form-radio h-5 w-5 text-blue-600"
                                        required
                                    />
                                    <img src={CarDriverImage} alt="Car Driver" className="w-6 h-6 ml-2" />
                                    <span className="ml-2">Hire a Driver</span>
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                From:
                            </label>
                            <div className="flex items-center">
                                <input
                                    type="date"
                                    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    required
                                />
                                <input
                                    type="time"
                                    className="ml-2 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                To:
                            </label>
                            <div className="flex items-center">
                                <input
                                    type="date"
                                    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    required
                                />
                                <input
                                    type="time"
                                    className="ml-2 shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}
