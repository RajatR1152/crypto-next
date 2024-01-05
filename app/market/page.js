'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Coins from '@/components/market/Coins'
import MarketNavs from '@/components/market/MarketNavs'
import Nfts from '@/components/market/Nfts'
import TopMovers from '@/components/market/TopMovers'
import React, { useState } from 'react'

export default function page() {

    const [show, setShow] = useState('coins');

    return (
        <div className="container w-full">
            <Header />
            <TopMovers />
            <MarketNavs show={show} setShow={setShow} />
            {show == 'coins' ? <Coins /> : <Nfts />}
            <Footer />
        </div>
    )
}
