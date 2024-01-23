import { Avatar } from '@mantine/core'
import React from 'react'
import { LuCopy, LuDownload } from "react-icons/lu";

export default function AvatarCard({imgUrl, downloadUrl}:{imgUrl: string, downloadUrl: string}) {
  return (
    <div className='hover:shadow-2xl shadow-primary-lighter rounded-2xl lg:rounded-3xl px-4 py-2 bg-primary-medium flex-y_center w-fit lg:!w-60 '>
      <span className="hidden lg:flex w-full relative h-6">
        <button className='hidden absolute btn-icon right-0 top-4'>
          <LuCopy size="1.2rem" />
        </button>
      </span>
      <img className='w-36 mt-4 lg:mt-0' src={imgUrl} />
      <span className="flex justify-between items-center w-full mt-2">
        <button className='hidden lg:flex items-center gap-2 opacity-0 hover:opacity-1 transition-opacity  cursor-pointer'>
          <Avatar src='https://api.multiavatar.com/Binx Bond.svg' radius='xl' />
          <p className='font-medium'>Ayemane Bdr</p>
        </button>
        <button className='lg:hidden btn-icon'>
          <LuCopy size="1.2rem" />
        </button>
        <button className='btn-icon'>
          <LuDownload size="1.5rem" />
        </button>
      </span>

    </div>
  )
}
