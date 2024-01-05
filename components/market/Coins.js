'use client'
import FormatPrice from '@/components/FormatPrice';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Coins() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en')
            .then((res) => {
                setData(res?.data);
            })
    }

    return (
        <div className="container mt-20 overflow-x-auto w-full">

            <table className="table-auto w-full">

                <thead>
                    <tr className='border-b-2 border-white'>
                        <th className='p-5 text-xl'>#</th>
                        <th className='p-5 text-xl'>coin</th>
                        <th className='p-5 text-xl'>current price</th>
                        <th className='p-5 text-xl'>2h change(%)</th>
                        <th className='p-5 text-xl'>market cap change 24hrs(%)</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data?.map((d, i) => {
                            return (
                                <tr key={i} className='border-b-2 border-white'>
                                    <td className='p-5 text-center' >{i + 1}</td>
                                    <td className='p-5 text-center' > <Link href={`/${d?.id}`} className='flex gap-5'> <img src={d?.image} className='h-12 rounded-full' alt="" />{d.id}</Link> </td>
                                    <td className='p-5 text-center' ><FormatPrice price={d.current_price} /></td>
                                    <td className={d.price_change_percentage_24h > 0 ? 'p-5 text-green-500 text-center' : 'p-5 text-red-500 text-center'} >{d.price_change_percentage_24h} %</td>
                                    <td className={d.market_cap_change_percentage_24h > 0 ? 'p-5 text-green-500 text-center' : 'p-5 text-red-500 text-center'} >{d.market_cap_change_percentage_24h}%</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
