import CoinsTable from '@/components/CoinsTable'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Landing from '@/components/Landing'
import ToastComponent from '@/components/ToastComponent'
import React from 'react'

export default function page() {
  return (
    <>
      <Header />
      <HeroSection />
      <Landing />
      <CoinsTable />
      <Features />
      <Footer />
    </>
  )
}
