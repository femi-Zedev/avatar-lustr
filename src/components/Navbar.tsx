import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Logo from './UI/Logo'
import { IoLogoGithub } from 'react-icons/io'
import { useDisclosure, useViewportSize } from '@mantine/hooks'
import { Burger } from '@mantine/core'
import { AnimatePresence, motion } from 'framer-motion'

export default function Navbar() {
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter()
  const { width } = useViewportSize();

  useEffect(() => {
    console.log(router.asPath)
  }, [router.asPath])


  const navLinks = [
    { label: 'Intro', link: '/#intro' },
    { label: 'Avatars', link: '/avatars' },
    { label: 'Documentation', link: '/#api' },
  ]

  return (
    <nav className={`w-full flex justify-between items-center py-4 px-[4%] md:px-[5%] xl:px-[20%] bg-primary-dark  ${opened && 'bgBlured absolute z-50'}`} >

      {width < 768 &&
        <div className='block w-full'>
          <div className="flex justify-between items-center">
            <Logo />
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />
          </div>
          <div className='w-full flex flex-col items-end '>
            <AnimatePresence>
              {opened &&

                <motion.nav initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.5 }} className="flex flex-col mt-4 gap-2 items-end" >

                  {navLinks.map((item, i) => (
                    <motion.div key={i} initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }}>
                      <Link
                        href={item.link}
                        className={`px-2 py-1 ${router.asPath == item.link ? 'font-medium text-lg' : 'text-primary-script'}   `}
                        key={i}>
                        {item.label}
                      </Link>
                    </motion.div>

                  ))}
                  {/* <motion.a  href="#about" onClick={() => { handleMenuClick("about") }} className={selected === "about" ? styles.selected : ""}>
                  <Trans id="about.title">About</Trans>
                </motion.a> */}
                </motion.nav>
              }

            </AnimatePresence>
          </div>
        </div>


      }
      {width > 768 &&

        <>
          <Logo />

          <ul className='flex items-center gap-2 lg:gap-6'>
            {navLinks.map((item, i) => (
              <Link
                href={item.link}
                className={`px-2 py-1 ${router.asPath == item.link ? 'link ' : 'text-primary-script'}   `}
                key={i}>
                {item.label}
              </Link>
            ))}
          </ul>

          <a href='https://github.com/femi-Zedev/avatar-lustr' className='p-3 rounded-full bg-primary-medium'>
            <IoLogoGithub className="w-7 h-7 lg:h-10 lg:w-10 fill-white" />
          </a>

        </>}

    </nav>
  )
}