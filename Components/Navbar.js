import React from 'react'
import { Image } from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <div className='navebar'>
            <Link href="/">Home</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/Contact">Contact</Link>
            <Link href="/Ninjs/Ninja">Post</Link>
        </div>
    </div>
  )
}

export default Navbar