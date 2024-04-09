import React from 'react'

export default function RateCard({ className }: { className?: string }) {
  return (
    <div className={`${className} bg-none rounded-2xl mx-[4%] md:w-3/5 flex flex-col lg:flex-row lg:hover:shadow-xl shadow-primary-dark/50`} >
      <span className="py-14 px-8 bg-primary-medium contribute-round  w-full lg:w-2/3">
        <h3 className='text-H3'>
          Si ce service vous a été utile, n’hésitez pas à nous donner une étoile ⭐ sur️ github ou contribuer au projet.
        </h3>
      </span>
      <span className='py-10 px-10 bg-primary-dark rounded-r-2xl  flex items-center justify-center w-full lg:w-1/3'>
        <a href='https://github.com/femi-Zedev/avatar-lustr' target='_blank' className="btn-primary !font-bold text-center">
          Donner une étoile
        </a>
      </span>
    </div>
  )
}
