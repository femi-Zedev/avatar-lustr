import { Avatar } from '@mantine/core'
import React from 'react'
import { LuCopy, LuDownload } from "react-icons/lu";

export default function AvatarCard() {
  return (
    <div className='rounded-3xl px-6 py-4 bg-primary-medium flex-y_center w-full max-w-80'>
      <span className="flex w-full relative h-8">
        <button className='absolute btn-icon right-0 top-2'>
          <LuCopy size="1.2rem" />
        </button>
      </span>
      <img src='/oceanien-H.svg' />
      <span className="flex justify-between items-center w-full mt-2">
        <hgroup className='opacity-0 hover:opacity-1 transition-opacity flex items-center gap-2 cursor-pointer'>
          <Avatar src='https://api.multiavatar.com/Binx Bond.svg' radius='xl' />
          <p className='font-medium'>Ayemane Bdr</p>
        </hgroup>
        <button className='btn-icon'>
          <LuDownload size="1.5rem" />
        </button>
      </span>

    </div>
  )
}
