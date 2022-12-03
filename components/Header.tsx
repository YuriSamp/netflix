
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsSearch, BsBell } from 'react-icons/bs'


function Header() {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", HandleScroll)

    return () => {
      window.removeEventListener("scroll", HandleScroll)
    }
  }, [])


  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">Tv Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">Popular</li>
          <li className="headerLink">My list</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light'>
        <BsSearch className='hidden h-6 w-6 sm:inline' />
        <p className='hidden lg:inline'>Kids</p>
        <BsBell className=' h-6 w-6 ' />
        <img
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
        />
      </div>
    </header>
  )
}

export default Header