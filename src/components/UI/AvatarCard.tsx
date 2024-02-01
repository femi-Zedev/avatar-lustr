import { AvatarProps } from '@/interfaces/avatar';
import { Avatar, Menu, Tooltip } from '@mantine/core'
import React, { useState } from 'react'
import { LuCopy, LuDownload } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

function AuthorMenu({ }) {
  return (
    <hgroup className='flex flex-col gap-2 p-2'>
      <span className='flex items-center gap-2'>
        <img className='w-10 h-10 rounded-xl border border-cyan-200' src='https://api.dicebear.com/7.x/adventurer/svg?seed=Simba&backgroundColor=b6e3f4' />
        <div className='flex flex-col gap-0'>
          <p className='font-semibold'>Gilka</p>
          <small className='text-xs text-gray-400'>Cotonou, Bénin</small>
        </div>
      </span>
      <span className='w-full flex justify-end gap-2'>
        <FaInstagram size="1.5rem" />
        <IoLogoLinkedin size="1.5rem" />
      </span>
    </hgroup>
  )
}
export default function AvatarCard({ imgUrl, author }: AvatarProps) {
  
  return (
    <div
      className='relative cursor-pointer group rounded-2xl lg:rounded-3xl px-4 py-2 bg-primary-medium flex-y_center w-full md:w-fit lg:!w-60 '>
      <span className="hidden lg:flex w-full relative h-6">
        <button className={`opacity-0 group-hover:opacity-100 absolute btn-icon right-0 top-4`} >
          <LuCopy size="1.2rem" />
        </button>
      </span>
      <img className='w-28 md:w-36 mt-4 mb-8 lg:mt-0' src={imgUrl} />
      <span className="hidden absolute bottom-3 px-4 lg:flex justify-between items-center w-full mt-2">
        <button className={`opacity-0 group-hover:opacity-100 lg:flex items-center gap-2 transition-opacity  cursor-pointer`} >
          <Menu withArrow width={200} trigger='click-hover' shadow="md" radius="lg" position='top'>
            <Menu.Target>
              <Avatar size="32px" src='https://api.dicebear.com/7.x/adventurer/svg?seed=Simba&backgroundColor=b6e3f4' />
            </Menu.Target>
            <Menu.Dropdown>
              <AuthorMenu />
            </Menu.Dropdown>
          </Menu>
          <p className='font-medium text-sm'>{author}</p>
        </button>
        <button className={`opacity-0 group-hover:opacity-100 btn-icon`} >
          <LuDownload size="1.2rem" />
        </button>
      </span>
      <hgroup className='w-full flex justify-between lg:hidden' >
        <button className='btn-icon'>
          <LuCopy size="1.2rem" />
        </button>
        <button className='btn-icon'>
          <LuDownload size="1.2rem" />
        </button>
      </hgroup>
    </div>
  )
}
