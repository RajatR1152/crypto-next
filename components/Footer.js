import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';


export default function Footer() {

    const date = new Date();

    return (
        <>
            <div className="container w-full border-t border-gray-600 flex md:flex-row flex-col bg-gray-800 p-5 f">
                <div className="container flex flex-col gap-6 md:w-8/12 h-fit p-5">
                    <h1 className="text-2xl font-semibold">@Crypto{date.getFullYear()}</h1>
                    <p className="text-lg md:w-10/12 font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, magnam accusamus ipsam ad non porro, earum modi eos officiis, ipsa ex quo. Enim quisquam quis eos dolores officiis laudantium voluptatem!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, magnam accusamus ipsam ad non porro, earum modi eos officiis, ipsa ex quo. Enim quisquam quis eos dolores officiis laudantium voluptatem!
                    </p>
                </div>
                <div className="container md:w-4/12 flex h-fit p-5">
                    <ul className='flex flex-col gap-4 w-fit mx-auto'>
                        <li className='text-lg font-semibold capitalize'>app</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                    </ul>
                    <ul className='flex flex-col gap-4 w-fit mx-auto'>
                        <li className='text-lg font-semibold capitalize'>wallet</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                    </ul>
                    <ul className='flex flex-col gap-4 w-fit mx-auto'>
                        <li className='text-lg font-semibold capitalize'>defi</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                    </ul>
                    <ul className='flex flex-col gap-4 w-fit mx-auto'>
                        <li className='text-lg font-semibold capitalize'>exchange</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                        <li className='text-md capitalize'>link</li>
                    </ul>
                </div>
            </div>
            <div className="container bg-gray-800 p-5 w-full flex flex-row gap-5">
                <div className="container flex items-center justify-center rounded-full p-2 w-10 lg:w-14 h-10 lg:h-14 cursor-pointer bg-green-500"><FaFacebookF size={30} /></div>
                <div className="container flex items-center justify-center rounded-full p-2 w-10 lg:w-14 h-10 lg:h-14 cursor-pointer bg-green-500"><FiInstagram size={30} /></div>
                <div className="container flex items-center justify-center rounded-full p-2 w-10 lg:w-14 h-10 lg:h-14 cursor-pointer bg-green-500"><FaTwitter size={30} /></div>
                <div className="container flex items-center justify-center rounded-full p-2 w-10 lg:w-14 h-10 lg:h-14 cursor-pointer bg-green-500"><FaGooglePlusG size={30} /></div>
            </div>

            <div className="bg-gray-800 border-t border-gray-700 flex items-center justify-center p-5">
                <p className="text-sm">@copyright</p>
            </div>

        </>
    )
}
