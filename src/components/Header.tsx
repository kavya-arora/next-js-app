import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const Header = ({children}) => {
    const router = useRouter();
    
  return (
    <>
      <ul className='border-y m-2 gap-4'>
        <Link href={{pathname:"/"}} className={`${router.pathname=="/"? "border-b": ""}`}>Home</Link>
        <Link href={{pathname:"/"}} className={`${router.pathname=="/follow"? "border-b": ""}`}>Following</Link>
        <Link href={{pathname:"/"}} className={`${router.pathname=="/contact-us"? "border-b": ""}`}>Contact Us</Link>
      </ul>
      {children}
    </>

  )
}

export default Header
