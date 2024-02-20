import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Logo from './UI/Logo'
import { IoLogoGithub } from 'react-icons/io'
import { useViewportSize } from '@mantine/hooks'

export default function Navbar() {
  const router = useRouter()
  const { width } = useViewportSize();

  useEffect(() => {
    console.log(router.asPath.substring(1))
  }, [router.asPath])


  const navLinks = [
    { label: 'Intro', link: '/#intro' },
    { label: 'Avatars', link: '/avatars' },
    { label: 'Documentation', link: '/#api' },
  ]

  return (
    <nav className="flex justify-between items-center py-4 px-[4%] md:px-[5%] xl:px-[20%] bg-primary-dark">
      <Logo />
      {width > 768 &&
        <>
          <ul className='flex items-center gap-2 lg:gap-6'>
            {navLinks.map((item, i) => (
              <Link
                href={item.link}
                legacyBehavior
                className={`${router.asPath.substring(1) == item.link ? 'link bg-primary-base text-white ' : 'text-primary-script'}   `}
                key={i}>
                {item.label}
              </Link>
            ))}
          </ul>

          <a href='' className='p-3 rounded-full bg-primary-medium'>
            <IoLogoGithub className="w-7 h-7 lg:h-10 lg:w-10 fill-white" />
          </a>

        </>}

    </nav>
  )
}