import React from 'react'
import { Menu } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { LuCopy } from "react-icons/lu";
import { BsCardImage, BsFiletypeSvg } from "react-icons/bs";
import { RxLink1 } from "react-icons/rx";
import { convertSVGtoPNG } from '@/helpers/imageConverter';
import { notifications } from '@mantine/notifications';



export default function CopyMenu({show, imgUrl}:{show:boolean, imgUrl: string}) {
  const [ opened, handlers] = useDisclosure(false);

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
            title: 'Illustration copiée',
            color: 'teal',
            message: "L'illustration à été copiée vous pouvez la coller maintenant",
          })
        })

        break;

        case 'png': 
        copyAsPng(link).then(()=>{
          notifications.show({
            id: 'svg-copy',
            title: 'Illustration copiée',
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
    <Menu opened={opened} onChange={handlers.toggle} shadow="md" radius="md" width={200}>
    <Menu.Target>
      <button onClick={handlers.open} className={`absolute btn-icon right-0 top-4 ${opened && 'bg-primary-lighter '} ${(show || opened) ? 'opacity-100' : 'opacity-0'} `}>
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
  )
}
