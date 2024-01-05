'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import FormatPrice from './FormatPrice';

export default function CoinsTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=200&page=5&sparkline=false&locale=en')
            .then((result) => {
                setData(result.data);
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <div data-aos="zoom-in" className="containe flex flex-col gap-8 mt-[30%] md:mt-0 w-full h-fit">
            <h1 className="text-3xl md:text-5xl font-semibold text-center mt-10">Trade more than 150 cryptocurrencies...</h1>
            <p className="text-xl text-center w-full md:w-7/12 mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti quisquam sunt voluptatum perferendis aut soluta
                itaque possimus eius beatae magnam, ab accusamus nobis
                sapiente voluptas minima architecto illo iure excepturi.
            </p>

            <div className="container mt-20 overflow-x-auto w-full">
                <table className="table-auto w-full">
                    <thead>
                        <tr className='border-b-2 border-white'>
                            <th className='p-5 text-xl'>#</th>
                            <th className='p-5 text-xl'>coin</th>
                            <th className='p-5 text-xl'>current price</th>
                            <th className='p-5 text-xl'>2h change(%)</th>
                            <th className='p-5 text-xl'>trade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((d, i) => {
                                while (i < 10) {
                                    return (
                                        <tr key={i} className='border-b-2 border-white'>
                                            <td className='p-5 text-center' >{i + 1}</td>
                                            <td className='p-5 text-center flex gap-5' > <img src={d.image} className='h-12 rounded-full' alt="" />{d.id}</td>
                                            <td className='p-5 text-center' ><FormatPrice price={d.current_price} /></td>
                                            <td className={d.price_change_percentage_24h > 0 ? 'p-5 text-green-500 text-center' : 'p-5 text-red-500 text-center'} >{d.price_change_percentage_24h} %</td>
                                            <td className='p-5 text-center' ><button className="py-3 px-5 bg-transparent border-2 border-green-300 rounded-lg text-green-300 hover:text-black text-lg font-semibold hover:bg-green-300">trade</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>

            <Link href={'/market'} className="container hover:text-green-400 w-button w-fit flex gap-3 teext-2xl capitalize font-semibold mx-auto px-8 py-3">see more <FaArrowRight size={30} /></Link>

        </div>
    )
}
