'use client'
import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdExitToApp } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from '@/app/shared/firebaseConfig';

export default function Sidebar({ showSideBar, setShowSideBar }) {

    const [user, setUser] = useState([]);
    const router = useRouter();

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
        <div className={showSideBar ? "container rounded-e-lg absolute z-20 h-screen bg-gray-800 p-5 transition-all flex md:hidden flex-col gap-8 ease-in-out duration-75 w-9/12" : "w-0 hidden"}>
            <div className="container w-full"><RxCross2 onClick={() => { setShowSideBar(false) }} className='cursor-pointer' size={30} /></div>
            <Link href={'/market'} className='text-xl p-3 hover:bg-slate-600 capitalize rounded-lg font-semibold'>market</Link>
            <Link href={'/watchlist'} className='text-xl p-3 hover:bg-slate-600 capitalize rounded-lg font-semibold'>watchlist</Link>

            <div className="container w-fit relative z-10 flex flex-col items-center justify-center gap-8">
                {user?.email ? <FaUserCircle className='fill-[#50ED97]' size={35} /> :
                    <Link href={'/login'} className="text-xl capitalize font-semibold text-[#50ED97]">login</Link>}
                {user?.email ? <MdExitToApp onClick={() => { logOut() }} className='fill-[#50ED97] cursor-pointer' size={35} /> :
                    <Link href={'/register'} className="text-xl capitalize font-semibold text-[#50ED97]">signup</Link>}
            </div>

        </div>
    )
}
