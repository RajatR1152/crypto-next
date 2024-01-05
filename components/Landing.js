import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'

export default function Landing() {
    return (
        <div className="container w-full mt-10 md:mt-36 h-screen bg-transparent bg-cover p-5 flex flex-col gap-12 items-center justify-center">

            <h1 data-aos="zoom-in" className="text-3xl font-bold text-center capitalize md:text-6xl">
                Welcome to the Future of Finance
            </h1>

            <p data-aos="zoom-in" className="text-xl w-10/12 md:w-7/12 text-center font-semibold md:leading-8">
                Unleash the power of decentralized currency with our cutting-edge cryptocurrency platform.
                Explore a world where financial freedom meets innovative technology.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus
                voluptates nemo, maxime, autem vero at quae inventore,
                rerum aliquid repellat excepturi facere quasi modi odit?
                Similique, ab maxime. Consequatur!
            </p>

            <img src="https://cdn0.iconfinder.com/data/icons/crypotonix/512/worldwide.png" alt="" style={{ animationDuration: '8s' }} className="w-full md:w-8/12 delay-1000 animate-spin absolute -z-10 h-auto" />

            <div data-aos="zoom-in" className="container w-full flex flex-col md:gap-5 text-center items-center justify-center">
                <span className='flex gap-3 text-lg font-semibold'><FaRegCheckCircle className='fill-green-400' size={30} />Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <span className='flex gap-3 text-lg font-semibold'><FaRegCheckCircle className='fill-green-400' size={30} />Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <span className='flex gap-3 text-lg font-semibold'><FaRegCheckCircle className='fill-green-400' size={30} />Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <span className='flex gap-3 text-lg font-semibold'><FaRegCheckCircle className='fill-green-400' size={30} />Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>

        </div>
    )
}
