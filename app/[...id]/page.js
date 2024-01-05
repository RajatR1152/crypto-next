'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';
import { collection, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { usePathname } from 'next/navigation';
import { db } from '../shared/firebaseConfig';
import Header from '@/components/Header';
import LineChart from '@/components/coinpage/LineChart';
import Footer from '@/components/Footer';
import CoinDetails from '@/components/coinpage/CoineDetails';

export default function CoinPage() {

  const path = usePathname();
  const [data, setData] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [user, setUser] = useState([]);
  const [isMarked, setIsMarked] = useState(false);

  useEffect(() => {
    getData();
    getUser();
    getWatchlist();
  }, [])

  function getData() {
    axios.get(`https://api.coingecko.com/api/v3/coins/${path}`)
      .then((res) => {
        setData(res.data);
      })
  }

  useEffect(() => {
    getUser();
  }, [])

  useEffect(() => {
    getWatchlist();
  }, [user]);

  useEffect(() => {
    checkWatchlist();
  }, []);

  function getUser() {
    let u = JSON.parse(localStorage.getItem('user'));
    setUser(u);
  }

  async function getWatchlist() {
    let u = user;
    if (u.email) {
      const q = query(collection(db, "users"), where("email", "==", user?.email));
      const querySnapShot = await getDocs(q);
      querySnapShot?.forEach((doc) => {
        setWatchlist(doc?.data().watchlist);
      })
    }
  }

  async function addToWatchlist(d) {

    const q = query(collection(db, 'users'), where("email", "==", user?.email));
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach(async (doc) => {
      const userRef = doc.ref;
      const user = doc.data();
      const updatedBookmarks = [...user?.watchlist, d];

      try {
        await updateDoc(userRef, {
          watchlist: updatedBookmarks,
        }).then((res) => {
          getWatchlist();
          checkWatchlist();
        })
      } catch (error) {
        console.error("Error: ", error);
      }
    });

  }

  function checkWatchlist() {
    watchlist.map((w) => {
      if (w == path.replace('/', "")) {
        setIsMarked(true);
      }
      else {
        setIsMarked(false);
      }
    })
  }

  async function remove(d) {
    const q = query(collection(db, 'users'), where("email", "==", user?.email));
    const querySnapShot = await getDocs(q);

    querySnapShot.forEach(async (doc) => {
      const userRef = doc.ref;
      const user = doc.data();
      const updatedBookmarks = user?.watchlist.filter(b => b !== d);

      try {
        await updateDoc(userRef, {
          watchlist: updatedBookmarks,
        }).then((res) => {
          getWatchlist();
          checkWatchlist();
        });
      } catch (error) {
        console.error("Error: ", error);
      }
    });
  }

  return (
    <div className="container w-full">
      <Header />
      <div className="container w-full p-4">
        <div className="container mt-24 w-full flex gap-5 items-center">
          <img src={data?.image?.thumb} alt="" className="w-14 h-14 rounded-full" />
          <h1 className="text-3xl font-semibold capitalize">{data.id}</h1>

          {
            isMarked ?
              <FaStar size={30} className='ms-auto me-5 cursor-pointer' onClick={() => { remove(path.replace('/', '')) }} />
              :
              <FaRegStar size={30} className='ms-auto me-5 cursor-pointer' onClick={() => { addToWatchlist(path.replace('/', '')) }} />
          }

        </div>

        <LineChart />

        <CoinDetails />

      </div>
      <Footer />
    </div>
  )
}
