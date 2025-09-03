'use client'
import Link from 'next/link'
import { useState } from 'react'
//*import CommandPalette from './CommandPalette'*//

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full py-4 bg-transparent sticky top-0 z-40">
      <div className="container flex items-center justify-between">
        <div className="text-xl font-semibold tracking-wide">Portfolio</div>
        <nav className="hidden md:flex gap-6 items-center text-sm text-slate-300">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}