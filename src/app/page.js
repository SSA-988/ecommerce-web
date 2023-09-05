"use client"
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Deals from './components/Deals'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import ProductFeed from './components/ProductFeed'

export default function Home() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <main className="">
      <Header/>

      <HeroBanner/>

      <Deals/>

      <ProductFeed/>
    </main>
  )
}
