'use client'

import React from 'react'
import { useContext, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Form from 'next/form';
import beanEater from '../assets/beanEater.svg';


const List = () => {

  const [inputValue, setInputValue] = useState({});
  const [inputText, setInputText] = useState({});
  const [inputNew, setInputNew] = useState("");
  const [inputNewNum, setInputNewNum] = useState("");
  const [items, setItems] = useState([]);
  const [typ, setTyp] = useState("");

  const getAllItems = async() => {
      const res = await fetch(`https://logilogi.onrender.com/items`);
      const data = await res.json();
      setItems(data.data);
    };
    console.log(`This is items ${items}`);

  useEffect(() => {
      getAllItems();   
    }, []);

//Updateed Input Handlers
    const newNumber = (e,id) => {
      setInputValue({
        ...inputValue,
        [id]:e.target.value
      });
    };
    const newName = (e,id) => {
      setInputText({
        ...inputText,
        [id]:e.target.value
      });
    };
//New Input Handlers
    const newItem = (e) => {
      setInputNew( e.target.value);
    };
    const newItemNum = (e) => {
      setInputNewNum(e.target.value);
    };
    const newTyp = (e) => {
      setTyp(e.target.value);
    };

//Update Handler
    const UpdateNumber = async(e, id) => {
      e.preventDefault();
     
     if(inputValue[id] || inputText[id] || inputValue[id] && inputText[id] ) {
      try {
        const requestContents ={
        method:'PUT',
        headers:{
          "content-type":'application/json'
          },
        body: JSON.stringify({
          name: inputText[id],
          quantity:inputValue[id]
        })
        };
        const res = await fetch(`https://logilogi.onrender.com/items/${id}`, requestContents);
        if (res.ok) {
          console.log(`Update successful for item ${id}`);
          getAllItems(); // Refresh the data
        } else {
          console.error(`Failed to update item ${id}: ${res.status}`);
        }
        }catch(err){
          console.log(`Failed to update ${err}`)
        }}
    };

//New Item Handler
    const addNewItem = async(e) => {
      e.preventDefault();
      if(!inputNew || !inputNewNum) {
        alert(`Either Name: ${inputNew} or Number: ${inputNewNum} is empty, Please check again`);
      }else{
        try{
          const requestNew = {
            method: 'POST',
            headers: {
              "content-type":"application/json"
            },
            body: JSON.stringify({
              name:inputNew,
              quantity:inputNewNum,
              typ: typ,
            })
          };
          const res = await fetch('https://logilogi.onrender.com/items',requestNew);
          if (res.ok) {
            console.log('Update successful for item');
            getAllItems(); // Refresh the data
            setInputNew(""); // Clear input fields
            setInputNewNum("");
          }else{
            console.error(`Failed to update item ${res.status}`);
          }
        }catch(err){
          console.log(`Failed to update ${err}`)
        }
      }
    }

  return (
    <div> 
      <Form>
        <input placeholder="What's new to add" value={inputNew} onChange={(e)=>newItem(e)}></input>
        <input placeholder="How many of them" value={inputNewNum} onChange={(e)=>newItemNum(e)}></input>
        <div>
              <button flat="true">Choose Category</button>
              <select value={typ} onChange={newTyp} required>
                <option>Food</option>
                <option>Cleaning</option>
                <option>Hygiene</option>
                <option>Other</option>
              </select>
            </div>
        <button onClick={(e)=>addNewItem(e)}>Add New Item</button>
      </Form>
       <ul key={items._id} className='list-none hover:list-disc'>
          {!items.length? <Image style={{width : "50px"}} alt={"loading"} src={beanEater} /> : 
          items.filter((i) => i.typ === "food" || i.typ === "Food").map((i) => <li key={i._id}>
          <Form action=''>
            <input id={i._id} type='text' defaultValue={inputText[i._id] || i.name} onChange={(e)=>newName(e, i._id)}></input>
            <input id={i._id} type='number' defaultValue={inputValue[i._id] || i.quantity} onChange={(e)=>newNumber(e, i._id)}></input>
            <button type='submit'onClick={(e)=>UpdateNumber(e, i._id)}>Update</button>
          </Form> 
          </li>)} 
        </ul>
    </div>
  )
}


export default List