import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black flex flex-col px-20 py-20  text-white'>
    <div className='bg-black  flex flex-row justify-around'>
        <div className='flex flex-col gap-8'>
            <h3>Voice your Mind</h3>
            <p>1234 Elm Street
                Suite 567
                Springfield, XY 12345
                India 🇮🇳
            </p>
        </div>
        <div>
            <ul >
                <Link href='./'><li>Home</li></Link>
                <Link href='/admin'><li>Admin</li></Link>
                <Link href='/post'><li>Post</li></Link>
                <Link href='/feed'><li>Feed</li></Link>
            </ul>
        </div>
    </div>
    <div className='flex text-center items-center justify-center pt-5'>
    <p>Made with ❤️ in 🇮🇳</p>
</div></div>
  )
}

export default Footer