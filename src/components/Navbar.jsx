import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='fixed z-[999] w-full md:px-20 px-5 py-5 flex items-center justify-between'>
            <div className='w-16 h-16 '>
                <img src={logo} alt="" />
            </div>
            <div className='menu'>
                <ul className='flex items-center font-textFont gap-4'>
                    <a href="https://drive.google.com/file/d/1XShk2h8yaicND00aKFuCvXy-g0-eyyTE/view"><button className='px-4 py-2 rounded-md bg-[#669bbc] outline-none cursor-pointer text-[#f5f5f5]'>View Resume</button></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
