import Navbar from '@/components/Navbar'
import IntroSection from '@/components/IntroSection'
import FilterSection from '@/components/FilterSection'
import Footer from '@/components/Footer'
import AvatarCard from '@/components/UI/avatar-card/AvatarCard'
import ApiSection from '@/components/ApiSection'
import { AvatarProps } from '@/interfaces/avatar'
import { useEffect, useState } from 'react'
import { avatarsArray } from '@/data/avatars'
import Link from 'next/link'

export default function Home() {

  const avatarsSample = avatarsArray.slice(0, 10);

  return (
    <main className="bg-primary-dark">
      <Navbar />
      <div className="w-full h-full">
        <IntroSection />

        <section className="w-full flex flex-col px-4 pt-8 md:pt-20 md:px-[5%] [background:linear-gradient(180deg,rgb(25,24,31)_0%,rgb(30,27,36)_100%)]">
          <div className='grid grid-cols-2 md:flex flex-wrap justify-center gap-4 md:gap-8 '>
            {
              avatarsSample.map(({ imgUrl, author, link, name, race, sexe }, i) => (
                <div key={i} className='col-span-1 hover:shadow-gray-950 hover:shadow-2xl  rounded-2xl lg:rounded-3xl '>
                  <AvatarCard
                    imgUrl={imgUrl}
                    author={author}
                    link={link}
                    name={name}
                    race={race}
                    sexe={sexe}
                  />
                </div>
              ))
            }
          </div>
          <Link className='w-full flex justify-center font-semibold text-paragraph mx-auto pt-12 cursor-pointer hover:underline text-primary-script' href='/avatars'>
            Voir tout les avatars
          </Link>
        </section>
        <ApiSection />
      </div>
      <Footer />
    </main>
  )
}
