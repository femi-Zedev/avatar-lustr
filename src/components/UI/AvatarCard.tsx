import { AvatarProps } from '@/interfaces/avatar';
import { Avatar, CopyButton, Menu, Tooltip } from '@mantine/core'
import React, { useState } from 'react'
import { LuCopy, LuDownload } from "react-icons/lu";
import { FaImage, FaInstagram } from "react-icons/fa6";
import { FaRegFileImage, FaRegImage } from "react-icons/fa";
import { BsCardImage, BsFileEarmarkImage, BsFiletypeSvg } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { RxLink1 } from "react-icons/rx";
import { notifications } from '@mantine/notifications';
import { convertSVGtoPNG } from '@/helpers/imageConverter';

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
      <span className='w-full flex justify-between'>
        <p className='italic ml-1'>Illustrateur, Bédéiste</p>
        <hgroup className='flex items-center gap-2'>
          <FaInstagram size="1.5rem" />
          <IoLogoLinkedin size="1.5rem" />
        </hgroup>
      </span>
    </hgroup>
  )
}
export default function AvatarCard({ imgUrl, author, link }: AvatarProps) {

  const [show, setShow] = useState(false)
  const [copyMenuOpen, setOpenCopyMenu] = useState(false)

  function handleCopy(imgUrl: string) {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_BASE_URL+'/'+imgUrl);
    notifications.show({
      id: 'link-copy',
      title: 'Lien copié',
      color: 'teal',
      message: "Url copié vous pouvez le coller maintenant",
    })
  }

  function handleCopyAsImage(type: 'svg' | 'png', link: string) {
    switch (type) {
      case 'svg':
        copyAsSvg(link).then(() => {
          notifications.show({
            id: 'svg-copy',
            title: 'Image copiée',
            color: 'teal',
            message: "L'illustration à été copiée vous pouvez la coller maintenant",
          })
        })

        break;

        case 'png': 
        copyAsPng(link).then(()=>{
          notifications.show({
            id: 'svg-copy',
            title: 'Image copiée',
            color: 'teal',
            message: "L'illustration à été copiée vous pouvez la coller maintenant",
          })
        })

      default:
        break;
    }
  }

  async function copyAsSvg(imgUrl: string) {
    try {
      const response = await fetch(imgUrl);
      const svgContent = await response.text();
      navigator.clipboard.writeText(svgContent);
      console.log(svgContent)
    } catch (error) {
      console.error('Error:', error);
    }  
  }

 async function copyAsPng(imgUrl: string){
    try {
      const blob = await convertSVGtoPNG(imgUrl);
      console.log('Converted PNG:', blob);
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className='relative cursor-pointer rounded-2xl lg:rounded-3xl px-4 py-2 bg-primary-medium flex-y_center w-full md:w-fit lg:!w-60 '>
      <span className="hidden lg:flex w-full relative h-6">
        <CopyButton value={link} key={2000} >
          {({ copy }) => (
            <Menu opened={copyMenuOpen} onChange={setOpenCopyMenu} shadow="md" radius="md" width={200}>
              <Menu.Target>
                <button onClick={() => setOpenCopyMenu(true)} className={`absolute btn-icon right-0 top-4 ${copyMenuOpen && 'bg-primary-lighter '} ${(show || copyMenuOpen) ? 'opacity-100' : 'opacity-0'} `}>
                  <LuCopy size="1.2rem" />
                </button>
              </Menu.Target>

              <Menu.Dropdown className='bg-primary-base' >
                <Menu.Label>Copier</Menu.Label>
                <Menu.Item leftSection={<BsCardImage />} className='flex items-center hover:bg-primary-light rounded' onClick={() => handleCopyAsImage('png', `./${imgUrl}`)} >
                  en tant que PNG
                </Menu.Item>
                <Menu.Item leftSection={<BsFiletypeSvg />} className='flex items-center hover:bg-primary-light rounded' onClick={() => handleCopyAsImage('svg', `./${imgUrl}`)} >
                  en tant que SVG
                </Menu.Item>
                <Menu.Item leftSection={<RxLink1 />} className='flex items-center hover:bg-primary-light rounded' onClick={() => handleCopy(imgUrl)}>
                  l'url de l'illustration
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          )}
        </CopyButton>
      </span>

      <img className='w-28 md:w-36 mt-4 mb-8 lg:mt-0' src={imgUrl} />
      <span className="hidden absolute bottom-3 px-4 lg:flex justify-between items-center w-full mt-2">
        <button className={`${show ? 'opacity-100' : 'opacity-0'} lg:flex items-center gap-2 transition-opacity  cursor-pointer`} >
          <Menu withArrow width={250} trigger='click-hover' shadow="md" radius="lg" position='top'>
            <Menu.Target>
              <Avatar size="32px" src='https://api.dicebear.com/7.x/adventurer/svg?seed=Simba&backgroundColor=b6e3f4' />
            </Menu.Target>
            <Menu.Dropdown className='bg-primary-base'>
              <AuthorMenu />
            </Menu.Dropdown>
          </Menu>
          <p className='font-medium text-sm'>{author}</p>
        </button>
        <button className={`${show ? 'opacity-100' : 'opacity-0'} btn-icon`} >
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
