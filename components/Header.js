'use client'
import { auth } from '@/app/shared/firebaseConfig';
import { signOut } from 'firebase/auth';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaBars, FaUserCircle } from 'react-icons/fa'
import { MdExitToApp } from 'react-icons/md';
import Sidebar from './Sidebar';

export default function Header() {

    const [user, setUser] = useState([]);
    const router = useRouter();
    const [showSideBar, setShowSideBar] = useState(false)

    useEffect(() => {
        getUser();
    }, [])

    function getUser() {
        const u = JSON.parse(localStorage.getItem('user'));
        setUser(u);
    }

    function logOut() {
        localStorage.removeItem('user');
        localStorage.setItem('ln', false);
        signOut(auth).then(() => {
            router.push('/login');
        }).catch((error) => {
        });
    }

    return (
        <div className='p-5 flex bg-transparent absolute z-10 flex-row w-full'>

            <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

            <div className="container hidden w-fit md:flex gap-5">
                <Link href={'/market'} className="text-xl capitalize font-semibold text-[#50ED97]">market</Link>
                <Link href={'/watchlist'} className="text-xl capitalize font-semibold text-[#50ED97]">watchlist</Link>
            </div>

            <div className="container w-full flex md:items-center gap-3 md:justify-center">
                <FaBars onClick={() => { setShowSideBar(true) }} size={35} className='md:hidden block cursor-pointer float-left mt-2' />
                <Link href={'/'} className="text-5xl text-center font-bold tracking-widest text-[#50ED97]">CRYPTO</Link>
            </div>

            <div className="container w-fit relative z-10 ms-auto hidden md:flex gap-8">
                {user?.email ? < FaUserCircle className='fill-[#50ED97]' size={35} /> :
                    <Link href={'/login'} className="text-xl capitalize font-semibold text-[#50ED97]">login</Link>}
                {user?.email ? <MdExitToApp onClick={() => { logOut() }} className='fill-[#50ED97] cursor-pointer' size={35} /> :
                    <Link href={'/register'} className="text-xl capitalize font-semibold text-[#50ED97]">signup</Link>}
            </div>

        </div>
    )
}
