'use client'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function TrendingCoins({ data }) {

    return (
        <div className="container mt-24 w-full p-2">

            <h1 className="text-4xl font-semibold text-center">Trending Coins</h1>

            <div className="container w-screen mt-5 p-10 columns-1 md:columns-3 xl:columns-5 h-[350px] md:h-[280px] overflow-x-auto ">

                {
                    data?.map((d, i) => {
                        return (
                            <Link href={`/${d.item.id}`} key={i} className="container border-2 border-white rounded-lg w-full h-full flex md:flex-row flex-col items-center justify-center mx-6 p-2 md:p-5">
                                <img src={d.item.thumb} alt="" className="md:w-3/12 w-8/12 mx-auto h-4/6" />
                                <div className="container w-full text-center flex flex-col p-3 md:gap-5">
                                    <h1 className="font-bold text-white text-lg">{d.item.id}</h1>
                                    <p className="text-md font-semibold">{d.item.data.price}</p>
                                    <p className={d.item.data.price_change_percentage_24h.usd > 0 ? "text-md font-semibold text-green-500 " : "text-md font-semibold text-red-500"}>{d.item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
                                </div>
                            </Link>
                        )
                    })
                }

                <Link href={'/marketpage'} className="container border-2 border-white rounded-lg w-full h-full flex md:flex-row flex-col items-center justify-center mx-6 p-2 md:p-5">
                    <p className="flex text-2xl capitalize font-bold text-blue-700 gap-4">see all <FaArrowRight size={30} /> </p>
                </Link>

            </div>
        </div>
    )
}
