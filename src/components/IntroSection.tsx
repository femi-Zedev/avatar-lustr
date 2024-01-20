import React from 'react'

export default function IntroSection() {
  return (
    <section className='px-[4%] lg:px-[6%] 2xl:px-[10%] w-full py-10'>

      <div className="w-full text-center lg:text-left grid grid-cols-12 bg-primary-base rounded-3xl gap-5  px-8 lg:px-20 py-6 lg:py-16">

        <hgroup className='order-2 lg:order-1 col-span-12 lg:col-span-6 my-auto flex-y gap-5 w-full'>
          <span className="flex-y gap-5 2xl:gap-10">
            <h1 className="text-H1">Des avatars illustrés pour tout vos projets</h1>
            <p className="text-paragraph text-primary-script">Trouvez le bon avatar illustré pour votre prochain projet design ou projet web</p>
          </span>

          <span className='flex flex-col lg:flex-row gap-8 2xl:gap-12'>
            <button className="btn-primary">Parcourir</button>
            <a href="" className='btn-link'>En savoir plus</a>
          </span>
        </hgroup>


        <div className='order-1 lg:order-2 col-span-12 lg:col-span-6 w-full rounded-3xl bg-primary-light h-[340px] 2xl:h-[400px]'>

        </div>
      </div>
    </section>
  )
}
