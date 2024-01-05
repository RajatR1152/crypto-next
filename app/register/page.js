'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { auth, db } from '../shared/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import LoadingPage from '@/components/LoadingPage';


export default function page() {

    const router = useRouter();

    const [user, setUser] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        watchlist: []
    });

    const [loading, setLoading] = useState(false);

    let n;
    let v;

    function handle(e) {
        n = e.target.name;
        v = e.target.value;
        setUser({ ...user, [n]: v });
    }

    function generateUniqueId() {
        const timestamp = new Date().getTime();

        const randomNum = Math.floor(Math.random() * 10000);

        const uniqueId = `${timestamp}${randomNum}`;

        return uniqueId;
    }

    function submit(e) {
        setLoading(true);
        e.preventDefault();
        let tc = document.getElementById('tc');
        if (tc.checked) {
            if (user.confirmPassword == user.password) {
                createUserWithEmailAndPassword(auth, user.email, user.password)
                    .then((userCredential) => {
                        const uc = userCredential.user;

                        setDoc(doc(db, 'users', generateUniqueId()), user).then((res) => {
                            setLoading(false);
                            router.push('/login');
                            ToastSuccess("sign up successfull ! please login");
                        })

                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        ToastErr(errorMessage);
                        setLoading(false);
                    });

            }
            else {
                ToastErr("password and confirm password doesn't match")
            }
        }
        else {
            toast.error('accept all the terms and conditions.')
        }
    }

    const ToastSuccess = (t) => {
        toast.success(t);
    };

    const ToastErr = (t) => {
        toast.error(t);
    };

    return (
        <div className="container w-full h-screen flex items-center justify-center">

            <form method='post' className="md:w-4/12 flex flex-col items-center justify-center gap-10 bg-[#090A56] p-5 h-screen">
                <h1 className="text-center text-5xl font-bold text-white">Sign up</h1>
                <input name='username' value={user.username} onChange={handle} type="text" required placeholder='username...' className="w-full text-black p-3 border-0 focus:outline-none" />
                <input name='email' value={user.email} onChange={handle} type="email" required placeholder='email...' className="w-full text-black p-3 border-0 focus:outline-none" />
                <input name='password' value={user.password} onChange={handle} type="password" required placeholder='password...' className="w-full text-black p-3 border-0 focus:outline-none" />
                <input name='confirmPassword' value={user.confirmPassword} onChange={handle} type="text" required placeholder='confirm password...' className="w-full text-black p-3 border-0 focus:outline-none" />

                <div className="container w-full items-center justify-center flex gap-5">
                    <input type="radio" name="tc" id="tc" />
                    <p>agree to all terms and conditions</p>
                </div>

                <button onClick={submit} className="w-full p-3  text-lg font-bold border-white border-2 text-white">{loading ? <LoadingPage /> : "Sign up"}</button>
                <span className="text-lg text-white">already have account ? <Link className='text-blue-500' href={'/login'}>login</Link> </span>
            </form>

            <div className="container hidden md:flex items-center justify-center md:w-8/12 p-5 bg-[#5b00ee22] h-screen">

                <div data-aos="fade-down-right" className="container flex flex-col gap-6 w-5/12">
                    <h1 className="text-center text-5xl font-bold capitalize">the only crypto card you need...</h1>
                    <p className="text-lg text-center font-semibold">
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

