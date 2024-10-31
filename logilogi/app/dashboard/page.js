import React from 'react'
import styles from "../page.module.css";
import Link from 'next/link';




const page = () => {
  return (
    <div className="columns-2">
      <div><Link href="/food">Food</Link></div>
      <div><Link href="/cleaning">Cleaning</Link></div>
      <div><Link href="/hygiene">Hygiene</Link></div>
      <div><Link href="/other">Other</Link></div>   
    </div>
  )
}

export default page
