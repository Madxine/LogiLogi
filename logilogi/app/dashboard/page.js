'use client'
import React from 'react'
import styles from "../page.module.css";
import Link from 'next/link';


const page = () => {
  return (
    <div style={styles} className="columns-2">
      <div><Link href="/dashboard/food">Food</Link></div>
      <div><Link href="/dashboard/cleaning">Cleaning</Link></div>
      <div><Link href="/dashboard/hygiene">Hygiene</Link></div>
      <div><Link href="/dashboard/other">Other</Link></div>   
    </div>
  )
}

export default page
