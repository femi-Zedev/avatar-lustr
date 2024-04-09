import React from 'react'
import Logo from './UI/Logo'
import Link from 'next/link'
import { IoLogoGithub } from "react-icons/io";
import RateCard from './UI/RateCard';

const links = [
  { label: 'Intro', link: '/#intro' },
  { label: 'Avatars', link: '/avatars' },
  { label: 'Documentation', link: '/#api' },
]
export default function Footer({ withRate = true }: { withRate?: boolean }) {
  return (
    <footer className="bg-primary-dark py-16 flex flex-col items-center justify-center gap-8  md:gap-12">
      {withRate && <RateCard className='lg:border border-primary-base' />}
      <div className="flex flex-col items-center gap-4">
        <Logo />
        <div className="flex gap-6">
          {links.map(({ label, link }, i) => (
            <Link className='text-paragraph hover:underline' href={link} key={i}>{label}</Link>
          ))}
        </div>
        <a href='https://github.com/femi-Zedev/avatar-lustr' target='_blank' className='p-3 my-3 rounded-full bg-primary-medium'>
          <IoLogoGithub size={26} className="fill-primary-script" />
        </a>
        <p className='text-paragraph text-primary-script'> AvatarLustr v1.0 © 2024</p>
      </div>
    </footer>
  )
}
