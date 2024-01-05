'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Nfts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        axios.get('https://api.coingecko.com/api/v3/nfts/list?per_page=100&page=1')
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
                        <th className='p-5 text-xl'>id</th>
                        <th className='p-5 text-xl'>asset_platform_id</th>
                        <th className='p-5 text-xl'>symbol</th>
                        <th className='p-5 text-xl'>contract_address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((d, i) => {
                            return (
                                <tr key={i} className='border-b-2 border-white'>
                                    <td className='p-5 text-center' >{i + 1}</td>
                                    <td className='p-5 text-center' > {d.id}</td>
                                    <td className='p-5 text-center' >{d.asset_platform_id} %</td>
                                    <td className='p-5 text-center' >{d.symbol}</td>
                                    <td className='p-5 text-center' >{d.contract_address}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
