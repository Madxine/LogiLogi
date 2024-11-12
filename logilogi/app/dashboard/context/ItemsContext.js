'use client'
import React from 'react';
import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext();

export default function ItemsContexProvider(props){
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const getAllItems = async() => {
        const res = await fetch('https://localhost:5000/items');
        const data = await res.json();
        console.log(`Tis is Data ${data.data}`);
        setItems(data.data)
    };

    useEffect(() => {
        getAllItems();
        console.log(`This is items ${items}`)
    }, []);
    
    return(
        <ItemsContext.Provider value = {{items, setItems, query, setQuery}}> {props.children} </ItemsContext.Provider>
    )
}