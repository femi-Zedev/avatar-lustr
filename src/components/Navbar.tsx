import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Logo from './UI/Logo'

export default function Navbar() {
  const router = useRouter()

  useEffect(() => {
    console.log(router.asPath.substring(1))
  }, [router.asPath])
  

  const navLinks = [
    { label: 'Intro', link: '#intro' },
    { label: 'Documentation', link: '#api' },
    { label: 'Avatars', link: '#avatars' },
    { label: 'A propos', link: '#info' },
  ]

  return (
    <nav className="flex justify-between items-center py-4 md:px-[5%] xl:px-[20%] bg-primary-dark">
      <Logo />

      <ul className='flex gap-6'>
        {navLinks.map((item, i) => (
          <Link
            href={item.link}
            className={`link ${router.asPath.substring(1) == item.link ? 'bg-primary-base text-white ' : 'text-primary-script'}   `}
            key={i}>
            {item.label}
          </Link>
        ))}
      </ul>

      <button>
        <svg width="61" height="59" viewBox="0 0 61 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.473 0.141299C13.8093 0.134561 0.3125 13.6246 0.3125 30.2749C0.3125 43.4415 8.75557 54.6338 20.5139 58.7441C22.0974 59.1417 21.8548 58.0164 21.8548 57.2482V52.0261C12.7109 53.0975 12.3403 47.0465 11.7271 46.0357C10.4873 43.9199 7.55615 43.3808 8.43213 42.3701C10.5143 41.2987 12.6368 42.6396 15.0963 46.2716C16.8752 48.9062 20.3454 48.4615 22.1041 48.0235C22.4882 46.44 23.3103 45.025 24.4423 43.9266C14.9683 42.2286 11.0196 36.4472 11.0196 29.5741C11.0196 26.2387 12.118 23.1727 14.2742 20.6998C12.8996 16.6231 14.4022 13.1327 14.6044 12.6139C18.5193 12.2635 22.5893 15.417 22.906 15.6663C25.1296 15.0666 27.6699 14.7499 30.5135 14.7499C33.3705 14.7499 35.9176 15.0801 38.1614 15.6865C38.9229 15.107 42.6963 12.3982 46.335 12.7284C46.5304 13.2473 47.9993 16.6568 46.7056 20.6796C48.8888 23.1593 50.0006 26.2521 50.0006 29.5943C50.0006 36.4809 46.025 42.269 36.524 43.9401C37.3378 44.7404 37.984 45.6949 38.4248 46.7477C38.8656 47.8005 39.0922 48.9306 39.0913 50.072V57.6525C39.1452 58.259 39.0913 58.8587 40.1021 58.8587C52.0355 54.8359 60.6269 43.5628 60.6269 30.2816C60.6269 13.6246 47.1233 0.141299 30.473 0.141299Z" fill="#EBECF3" />
        </svg>
      </button>
    </nav>
  )
}