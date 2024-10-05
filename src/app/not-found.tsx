import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-10 h-dvh' >
        <img src='/images/404.png' />
        <h1 className='font-extrabold text-3xl text-red-600'>Uh-oh!</h1>
        <p className='font-semibold'>You've hit a dead end. Time to retrace your steps!</p>
        <Link href='/'>
  <button className='bg-black text-white px-4 py-2 rounded shadow-lg'>
    Home
  </button>
</Link>
    </div>
  )
}

export default notFound