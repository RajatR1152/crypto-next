'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TrendingCoins from './TrendingCoins';
import TrendingNfts from './TrendingNfts';


export default function TopMovers() {

    const [coins, setCoins] = useState([]);
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    function getData() {
        axios.get('https://api.coingecko.com/api/v3/search/trending')
            .then((res) => {
                setCoins(res.data.coins)
                setNfts(res.data.nfts);
            })
    }

    return (
        <div className="container w-full flex flex-col gap-9">
            <TrendingCoins data={coins} />
            <TrendingNfts data={nfts} />
        </div>
    )
}
