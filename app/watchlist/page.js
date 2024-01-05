'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../shared/firebaseConfig';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LoadingPage from '@/components/LoadingPage';

export default function page() {

    const [userData, setUserData] = useState([]);
    const [data, setData] = useState([])
    const [isLogedIn, setIsLogedIn] = useState(null);
    const router = useRouter();
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        getUser();
    }, [])

    useEffect(() => {
        getWatchlist();
    }, [userData])

    function getUser() {
        let u = JSON.parse(localStorage.getItem('user'));
        const ln = localStorage.getItem('ln');
        setUserData(u);
        setIsLogedIn(ln);
    }

    async function getWatchlist() {
        let u = userData;
        if (u?.email) {
            const q = query(collection(db, "users"), where("email", "==", userData?.email));
            const querySnapShot = await getDocs(q);
            querySnapShot?.forEach((doc) => {
                setData(doc?.data().watchlist);
            })
        }
    }

    setTimeout(() => {
        if (!userData) {
            router.push('/login');
        }
        else {
            setLoading(false);
        }
    }, 5000);

    if (loading) {
        return (
            <div className="container w-full h-screen">
                <LoadingPage />
            </div>
        )
    }

    return (
        <div className="container w-full">
            <div className="container h-[90px] w-full">
                <Header />
            </div>

            <div className="container h-screen overflow-y-auto w-full p-5" >

                <table className="table-auto w-full">

                    <thead>
                        <tr className='border-b-2 border-white'>
                            <th className='p-5 text-xl'>#</th>
                            <th className='p-5 text-xl'>coin</th>
                            <th className='p-5 text-xl'><FaArrowRight size={30} /></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data?.map((d, i) => {
                                return (
                                    <tr key={i} className='border-b-2 border-white'>
                                        <td className='p-5 text-center' >{i + 1}</td>
                                        <td className='p-5 text-center' > <Link href={`/${d}`} className='flex gap-5 text-white'>{d}</Link> </td>
                                        <td className='p-5 text-center' > <FaArrowRight size={30} /> </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

            <Footer />
        </div>
    )
}
