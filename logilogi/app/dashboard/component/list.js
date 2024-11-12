'use client'

import React from 'react'
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import beanEater from '../assets/beanEater.svg';


    

const List = () => {

  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const getAllItems = async() => {
      const res = await fetch('http://localhost:5000/items');
      const data = await res.json();
      console.log(`Tis is Data ${JSON.stringify(data)}`);
      setItems(data.data)
  };

  useEffect(() => {
      getAllItems();
      console.log(`This is items ${items}`)
  }, []);


  return (
    <div>
       <ul className='list-none hover:list-disc'>
          {!items? <Image style={{width : "50px"}} alt={"loading"} src={beanEater} /> : items.map((i) => <li value={i}><button>+</button><button>-</button><button>Update</button></li>)} 
        </ul>
    </div>
  )
}


export default List