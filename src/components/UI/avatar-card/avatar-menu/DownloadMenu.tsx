import React from 'react'
import { Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { LuDownload } from 'react-icons/lu';
import { BsCardImage, BsFiletypeSvg } from 'react-icons/bs';
import { downloadPNG } from '@/helpers/downloadPng';

export default function DownloadMenu({show, name, imgUrl}:{show:boolean, name: string, imgUrl: string}) {
  const [opened, handlers] = useDisclosure(false);

  function handleDownloadPng(link: string, name: string) {
    downloadPNG(link, name+'.png')
  }

  async function  handleDownloadSvg(svgUrl: string, fileName: string){
    try {
      const response = await fetch(svgUrl, {
        headers: {
          'Content-Type': 'image/svg+xml'
        }
      });
      const blob = await response.blob();
      
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      URL.revokeObjectURL(url);
  
    } catch (error) {
      console.error('Error downloading SVG:', error);
    }
  }

  return (
      <Menu opened={opened} onChange={handlers.toggle} shadow="md" radius="md" width={200}>
        <Menu.Target>
          <button onClick={handlers.open} className={`btn-icon ${opened && 'bg-primary-lighter'} ${(show || opened) ? 'opacity-100' : 'opacity-0'} `}>
            <LuDownload size="1.2rem" />
          </button>
        </Menu.Target>

        <Menu.Dropdown className='bg-primary-base' >
          <Menu.Label>Télécharger</Menu.Label>
          <Menu.Item leftSection={<BsCardImage />} className='flex items-center hover:bg-primary-light rounded' onClick={() => handleDownloadPng(imgUrl, name)} >
            en PNG
          </Menu.Item>
          <Menu.Item leftSection={<BsFiletypeSvg />} className='flex items-center hover:bg-primary-light rounded' onClick={() => handleDownloadSvg(imgUrl, name)} >
            en SVG
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
  )
}
