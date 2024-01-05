'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../shared/firebaseConfig';
import LoadingPage from '@/components/LoadingPage';

export default function page() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    let n;
    let v;

    function handle(e) {
        n = e.target.name;
        v = e.target.value;
        setUser({ ...user, [n]: v });
    }

    function submit(e) {
        setLoading(true);
        e.preventDefault();
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const user = JSON.stringify(userCredential.user);
                localStorage.setItem('ln', true);
                localStorage.setItem('user', user);
                ToastSuccess();
                setLoading(false);
                router.push('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                ToastErr(errorMessage);
                setLoading(false);
            });
    }

    const ToastSuccess = () => {
        toast.success("login Successfull");
    }

    const ToastErr = (t) => {
        toast.error(t);
    }

    return (
        <div className="container w-full h-screen flex items-center justify-center">

            <form method="post" className="md:w-4/12 flex flex-col items-center justify-center gap-10 bg-[#090A56] p-5 h-screen">
                <h1 className="text-center text-5xl font-bold text-white">Log in</h1>
                <input name='email' value={user.email} onChange={handle} type="email" required placeholder='email...' className="w-full p-3 text-black border-0 focus:outline-none" />
                <input name='password' value={user.password} onChange={handle} type="password" required placeholder='password...' className="w-full p-3 text-black border-0 focus:outline-none" />
                <button onClick={submit} className="w-full p-3  text-lg font-bold border-white border-2 text-white">{loading ? <LoadingPage /> : "Log in"} </button>
                <span className="text-lg text-white">don't have account ? <Link className='text-blue-500' href={'/register'}> create account</Link> </span>
            </form>

            <div className="container hidden md:flex items-center justify-center w-8/12 p-5 bg-[#5b00ee22] h-screen">
                <div data-aos="fade-down-right" className="container flex flex-col gap-6 w-5/12">
                    <h1 className="text-center text-3xl lg:text-5xl font-bold capitalize">the only crypto card you need...</h1>
                    <p className="text-md xl:text-lg text-center font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, temporibus? Quam possimus, id quibusdam velit pariatur vitae corrupti quia omnis error, laborum ut reiciendis eligendi dolore impedit tempora ad ex.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, temporibus? Quam possimus, id quibusdam velit pariatur vitae corrupti quia omnis error, laborum ut reiciendis eligendi dolore impedit tempora ad ex.
                    </p>
                </div>
                <div className="container w-7/12">
                    <img data-aos="fade-up-left" src="https://images.ctfassets.net/s9sj79zoigw1/5NXhLYXFYe3BA3aEBcjW5t/8b5534484700abf6be78f1bb57ca2cda/header-wallet_2.png" alt="" />
                </div>

            </div>

        </div>
    )
}
