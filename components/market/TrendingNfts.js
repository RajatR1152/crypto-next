'use client'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function TrendingNfts({ data }) {


    return (
        <div className="container w-full p-2">

            <h1 className="text-4xl font-semibold text-center">Trending NFTS</h1>

            <div className="container w-screen mt-5 p-10 columns-1 md:columns-3 xl:columns-5 h-[350px] md:h-[280px] overflow-x-auto ">

                {
                    data?.map((d, i) => {
                        return (
                            <Link key={i} href={'/'} className="container border-2 border-white rounded-lg w-full h-full flex md:flex-row flex-col items-center justify-center mx-6 p-2 md:p-5">
                                <img src={d.thumb} alt="" className="md:w-3/12 w-8/12 mx-auto h-4/6" />
                                <div className="container w-full text-center flex flex-col p-3 md:gap-5">
                                    <h1 className="font-bold text-white text-lg">{d.id}</h1>
                                    <p className="text-md font-semibold">{d.data.floor_price}</p>
                                </div>
                            </Link>
                        )
                    })
                }

                <Link href={'/'} className="container border-2 border-white rounded-lg w-full h-full flex md:flex-row flex-col items-center justify-center mx-6 p-2 md:p-5">
                   <p className="flex text-2xl capitalize font-bold text-blue-700 gap-4">see all <FaArrowRight size={30} /> </p>
                </Link>

            </div>
        </div>
    )
}
