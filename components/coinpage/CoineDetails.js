import axios from 'axios';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import FormatPrice from '../FormatPrice';

export default function CoinDetails() {

    const [details, setDetails] = useState([]);
    const path = usePathname();

    useEffect(() => {
        getDetails();
    }, [])

    function getDetails() {
        axios.get(`https://api.coingecko.com/api/v3/coins/${path}`).
            then((res) => {
                setDetails(res?.data);
            });
    }


    return (
        <div className="container w-full flex flex-col gap-5">
            <div className="container md:w-10/12 mx-auto w-full">

                <div className="container w-full flex gap-5">
                    <img src={details?.image?.thumb} alt="" className="w-14 h-14 rounded-full" />
                    <h1 className="text-4xl font-semibold capitalize">{details?.id}</h1>
                </div>

                <div className="container flex my-10 md:flex-row flex-col w-full ">

                    <div className="container w-full md:w-6/12 flex flex-col p-4 md:w-6-12 border-2 border-white">

                        <div className="container w-full flex border-b border-white p-3">
                            <h1 className="md:text-xl font-bold w-5/12">market rank  : </h1>
                            <h1 className="md:text-lg w-5/12">{details?.market_data?.market_cap_rank}</h1>
                        </div>

                        <div className="container w-full flex border-b border-white p-3">
                            <h1 className="md:text-xl font-bold w-5/12">contract address  : </h1>
                            <h1 className="md:text-xs text-[12px] my-auto w-5/12">{details?.contract_address}</h1>
                        </div>

                        <div className="container w-full flex border-b border-white p-3">
                            <h1 className="md:text-xl font-bold w-5/12">symbol  : </h1>
                            <h1 className="md:text-lg w-5/12">{details?.symbol}</h1>
                        </div>

                        <div className="container w-full flex border-b border-white p-3">
                            <h1 className="md:text-xl font-bold w-5/12">circulation supply  : </h1>
                            <h1 className="md:text-lg w-5/12"><FormatPrice price={details?.market_data?.circulating_supply} /></h1>
                        </div>

                        <div className="container w-full flex border-b border-white p-3">
                            <h1 className="md:text-xl font-bold w-5/12">market cap  : </h1>
                            <h1 className="md:text-lg w-5/12"><FormatPrice price={details?.market_data?.market_cap.inr} /></h1>
                        </div>

                        <div className="container w-full flex p-3">
                            <h1 className="md:text-xl font-bold w-5/12">market cap change  : </h1>
                            <h1 className={details?.market_data?.market_cap_change_percentage_24h > 0 ? "md:text-lg w-5/12 text-green-500" : "md:text-lg w-5/12 text-red-500"}>{details?.market_data?.market_cap_change_percentage_24h.toFixed(2)} % </h1>
                        </div>

                    </div>

                    <div className="container w-full md:w-6/12 flex flex-col p-4 md:w-6-12 border-2 border-white">

                        <div className="container w-full flex border-b border-white p-3">
                            <h1 className="md:text-xl font-bold w-5/12">current price  : </h1>
                            <h1 className="md:text-lg w-5/12"><FormatPrice price={details?.market_data?.current_price.inr} /></h1>
                        </div>

                        <div className="container w-full flex border-b border-white p-3">
                            <h1 className="md:text-xl font-bold w-5/12">price change  : </h1>
                            <h1 className="md:text-xl my-auto w-5/12"><FormatPrice price={details?.market_data?.price_change_24h} /></h1>
                        </div>

                        <div className="container w-full flex border-b border-white p-3">
                            <h1 className="md:text-xl font-bold w-5/12">max supply  : </h1>
                            <h1 className="md:text-lg w-5/12">{details?.market_data?.max_supply}</h1>
                        </div>

                        <div className="container w-full flex border-b border-white p-3">
                            <h1 className="md:text-xl font-bold w-5/12">low(24hrs)  : </h1>
                            <h1 className="md:text-lg w-5/12"><FormatPrice price={details?.market_data?.low_24h?.inr} /></h1>
                        </div>

                        <div className="container w-full flex border-b border-white p-3">
                            <h1 className="md:text-xl font-bold w-5/12">high(24hrs)  : </h1>
                            <h1 className="md:text-lg w-5/12"><FormatPrice price={details?.market_data?.high_24h?.inr} /></h1>
                        </div>

                        <div className="container w-full flex p-3">
                            <h1 className="md:text-xl font-bold w-5/12">total supply  : </h1>
                            <h1 className="md:text-lg w-5/12"><FormatPrice price={details?.market_data?.total_supply} /></h1>
                        </div>

                    </div>

                </div>

                <p className="text-lg tracking-widest leading-9 font-light">{details?.description?.en}</p>
            </div>
        </div>
    )
}
