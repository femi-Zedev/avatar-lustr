import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function IntroSection() {
  return (
    <section id='intro' className='px-[4%] lg:px-[6%] 2xl:px-[10%] w-full py-10'>

      <div className="w-full text-center lg:text-left grid grid-cols-12 bg-primary-base rounded-3xl gap-5  px-8 lg:px-20 py-6 lg:py-16">

        <hgroup className='order-2 lg:order-1 col-span-12 lg:col-span-6 my-auto flex-y gap-5 w-full'>
          <span className="flex-y gap-5 2xl:gap-10">
            <h1 className="text-H1">Des avatars illustrés pour tout vos projets</h1>
            <p className="text-paragraph text-primary-script">Trouvez le bon avatar illustré pour votre prochain projet design ou projet web</p>
          </span>

          <span className='flex flex-col lg:flex-row gap-8'>
            <Link href='/avatars' className="btn-primary">Parcourir</Link>
            <a href="https://github.com/femi-Zedev/avatar-lustr" className='btn-link'>En savoir plus</a>
          </span>
        </hgroup>


        <div className='order-1 p-6 lg:order-2 col-span-12 lg:col-span-6 w-full rounded-3xl bg-primary-dark h-[340px] 2xl:h-[400px] shadow-neon'>
          <div className='flex contain items-end rounded-2xl w-full h-full'>
            <img className='mt-auto' width='100%' src="/intro-img.png" />
          </div>
        </div>
      </div>
    </section>
  )
}
