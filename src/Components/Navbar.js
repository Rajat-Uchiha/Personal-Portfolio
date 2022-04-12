import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav className="py-2 flex flex-wrap justify-around bg-stone-900" >
            <div className="mx-auto flex justify-center items-center sm:mx-5 ">
                <h1 className="text-6xl font-Chewy text-white">Welcome!</h1>
            </div>
            <ul className="flex items-center flex-wrap justify-center ">
                <li className="mx-2 text-xl lg:text-2xl xl:text-3xl ">
                    <Link className="hover:text-lime-500 font-Chewy text-white" to="/" >Home</Link>
                </li>
                <li className="mx-2 text-xl lg:text-2xl xl:text-3xl ">
                    <Link className="hover:text-lime-500 font-Chewy text-white" to="/skills">Skills</Link>
                </li>
                <li className="mx-2 text-xl lg:text-2xl xl:text-3xl ">
                    <Link className="hover:text-lime-500 font-Chewy text-white" to="/projects">Projects</Link>
                </li>
                <li className="mx-2 text-xl lg:text-2xl xl:text-3xl ">
                    <Link className="hover:text-lime-500 font-Chewy text-white" to="/qualifications">Qualifications</Link>
                </li>
                <li className="mx-2 text-xl lg:text-2xl xl:text-3xl ">
                    <Link className="hover:text-lime-500 font-Chewy text-white" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav >

    )
}
