"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";


type Props = {};

export default function Navbar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const obj = [
    {
      label: "Collections",
      link: "#",
    },
    {
      label: "Men",
      link: "#",
    },
    {
      label: "About",
      link: "#",
    },
    {
      label: "Contact",
      link: "#",
    },
  ];

  const func=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <main className="container relative mx-auto">
      <nav className="flex justify-between px-8 py-6 items-center">
        <section className="flex gap-8 items-center">
          <FiMenu id="menu" className="text-3xl lg:hidden cursor-pointer" onClick={func}/>
          <Link href="/" className="text-4xl font-mono">
            Logo
          </Link>
         
            {obj.map((d, i) => (
              <Link key={i} href={d.link} className="hidden cursor-pointer md:block text-xl text-gray-500 hover:text-black">
                {d.label}
              </Link>
            ))}
         
          
        </section>

        {isMenuOpen && (<section
          id="window"
          className="absolute lg:hidden bg-white text-black flex flex-col gap-8 p-8 top-0 left-0 w-full h-screen z-50  "
        >
          <AiOutlineClose className="mt-0 mb-8 text-2xl cursor-pointer" onClick={func}/>

          {obj.map((d, i) => (
            <Link key={i} href={d.link} className="text-2xl text-black">
              {d.label}
            </Link>
          ))}
        </section>)}

        <section className="flex gap-4 items-center">
          <AiOutlineShoppingCart className="text-3xl"  />
          <Image
            src="https://i.pravatar.cc/150?img=3"
            alt=""
            className="w-8 h-8 rounded-full"
            width={40}
            height={40}
          ></Image>
        </section>
      </nav>
      <hr />
    </main>
  );
}
