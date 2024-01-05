'use client'
import React from 'react'

export default function MarketNavs({ show, setShow }) {

    return (
        <div className="contaienr w-fit flex gap-5 mx-auto p-4 items-center">
            <button onClick={() => { setShow(false) }} className={!show ? "bg-transparent border-b-[5px] text-xl font-semibold p-4 w-[150px] border-[lime]" : "bg-transparent border-b-[5px] border-transparent text-xl font-semibold p-4 w-[150px]"} >Nfts</button>
            <button onClick={() => { setShow(true) }} className={show ? "bg-transparent border-b-[5px] text-xl font-semibold p-4 w-[150px] border-[lime]" : "bg-transparent border-b-[5px] border-transparent text-xl font-semibold p-4 w-[150px]"} >Coins</button>
        </div>
    )
}
