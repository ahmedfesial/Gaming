'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


export default function Navbar() {


  const pathname = usePathname();


  return <>

<div>
  {/* Header */}
  <div className="bg-[#272b30]">
    <img
      style={{ maxHeight: '30vh', objectFit: 'cover' }}
      className="w-full"
      src="/Image/wraper.png"
      alt=""
    />
  </div>
  {/* Navbar */}
  <nav className="bg-[#3A497B] max-w-7xl mx-auto mt-4 rounded-2xl shadow-md px-4 sticky top-0 z-3">
    <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
      {/* Logo*/}
      <Link title='Home' href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/Image/logo-sm.png" className="h-8" alt="Game Logo" />
        <span className="text-2xl font-light text-white whitespace-nowrap">
          Game Reviews
        </span>
      </Link>

      {/* Button Moblie */}
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={() => {
          const nav = document.getElementById('navbar-default');
          if (nav) nav.classList.toggle('hidden');
        }}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Elements*/}
      <div className="hidden w-full md:block md:w-auto mt-4 md:mt-0" id="navbar-default">
        <ul className="flex flex-col md:flex-row md:space-x-6 text-white uppercase">

        {[
           { href: '/Mmorpg', label: 'mmorpg' },
           { href: '/Shooter', label: 'shooter' },
           { href: '/Sailing', label: 'sailing' },
           { href: '/Permadeath', label: 'permadeath' },
           { href: '/Superhero', label: 'Superhero' },
           { href: '/Pixel', label: 'pixel' },
          ].map(({href , label}) => (<li key={href}>
              <Link href={href} className={`transition hover:text-[#09c] ${ pathname === href ? `text-[#09c] font-bold` : ''}`}>
                {label}
              </Link>
          </li>) )
          }
        </ul>
      </div>
    </div>
  </nav>
</div>
  </>
}
