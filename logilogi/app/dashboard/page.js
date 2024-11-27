'use client'
import React from 'react';
import Image from 'next/image';
import styles from "../page.module.css";
import Link from 'next/link';
import dualRing from './assets/dualRing.svg';
import {useEffect, useState} from 'react';
import { stringify } from 'postcss';

const page = () => {

  const [items, setItems] = useState([]);

  const getAllItems = async() => {
    const res = await fetch(`https://logilogi.onrender.com/items`);
    const data = await res.json();
    setItems(data.data);
  };
  console.log(`This is items ${items}`);
  
  useEffect(() => {
    getAllItems();   
  }, []);


  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
      <article className="flex max-w-xl flex-col items-start justify-between">
        {/* <Image src="./assets/kitchen.jpg" className="size-10 rounded-full bg-gray-50"/> */}
        <div className="group relative">
        <Link className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600" href="/dashboard/food">Food</Link>
          <ul key={items._id} className="group-hover:text-gray-600">
            {!items.length? <Image style={{width : "50px"}} alt={"loading"} src={dualRing} priority={true}/> : 
               items.filter((i)=> i.typ === "food" || i.typ === "Food").slice(0.3).splice(0,3).map((i)=> 
               <li key={i._id}>
                <div>
                  {i.name} 
                  {i.quantity}
                </div>
                  </li> )
              }
            </ul>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="group relative">
        <Link className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600" href="/dashboard/cleaning">Cleaning</Link>
          <ul key={items._id} className="group-hover:text-gray-600">
            {!items.length? <Image style={{width : "50px"}} alt={"loading"} src={dualRing} priority={true}/> : 
               items.filter((i)=> i.typ === "cleaning" || i.typ === "Cleaning").slice(0.3).map((i)=> <li key={i._id}>{i.name} {i.quantity}</li> )
              }
            </ul>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="group relative">
        <Link className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600" href="/dashboard/hygiene">Hygiene</Link>
          <ul key={items._id} className="group-hover:text-gray-600">
            {!items.length? <Image style={{width : "50px"}} alt={"loading"} src={dualRing} priority={true}/> : 
               items.filter((i)=> i.typ === "hygiene" || i.typ === "Hygiene").splice(0,3).map((i)=> <li key={i._id}>{i.name} {i.quantity}</li>)
              }
            </ul>
        </div>
      </article>
      <article className="flex max-w-xl flex-col items-start justify-between">
        <div className="group relative">
        <Link className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600" href="/dashboard/other">Other</Link>
          <ul key={items._id} className="group-hover:text-gray-600">
            {!items.length? <Image style={{width : "50px"}} alt={"loading"} src={dualRing} priority={true}/> : 
               items.filter((i)=> i.typ === "other" || i.typ === "Other").slice(0.3).map((i)=> <li key={i._id}>{i.name} {i.quantity}</li> )
              }
            </ul>
        </div>
      </article>
      </div>
    </div>
  )
}

export default page
