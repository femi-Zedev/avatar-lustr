import React from 'react'
import Logo from './UI/Logo'
import Link from 'next/link'
import { IoLogoGithub } from "react-icons/io";

const links = [
  { label: 'Intro', link: '' },
  { label: 'Documentation', link: '' },
  { label: 'Avatar', link: '' },

]
export default function Footer() {
  return (
    <footer className="bg-primary-dark py-16 flex flex-col items-center justify-center gap-8  md:gap-12">
      <RateCard className='lg:border border-primary-base' />
      <div className="flex flex-col items-center gap-4">
        <Logo />
        <div className="flex gap-6">
          {links.map(({ label, link }, i) => (
            <Link className='text-H3' href={link} key={i}>{label}</Link>
          ))}
        </div>
        <a href='' className='p-3 my-3 rounded-full bg-primary-medium'>
          <IoLogoGithub size={26} className="fill-primary-script" />
        </a>
        <p className='text-paragraph text-primary-script'> AvatarLustr v1.0 © 2023</p>
      </div>
    </footer>
  )
}

function RateCard({ className }: { className?: string }) {
  return (
    <div className={`${className} bg-none rounded-2xl mx-[4%] md:w-3/5 flex flex-col lg:flex-row lg:hover:shadow-xl shadow-primary-dark/50`} >
      <span className="py-14 px-8 bg-primary-medium contribute-round  w-full lg:w-2/3">
        <h3 className='text-H3'>
          Si ce service vous a été utile, n’hésitez pas à nous donner une étoile ⭐ sur️ github ou contribuer au projet.
        </h3>
      </span>
      <span className='py-10 px-10 bg-primary-dark rounded-r-2xl  flex items-center justify-center w-full lg:w-1/3'>
        <button className="btn-primary !font-bold">
          Donner une étoile
        </button>
      </span>
    </div>
  )
}
