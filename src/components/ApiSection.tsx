import React from 'react'
import CopyUrl from './UI/CopyUrl'
import { Notification } from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'

export default function ApiSection() {
  return (
    <section id='api' className="px-[4%] lg:px-[6%] 2xl:px-[10%] w-full py-14 text-center bg-primary-bold text-primary-script">
      <h1 className='text-H1 text-white'>Comment utiliser l’API ?</h1>

      <h2 className="text-H2 text-teal-500 font-extrabold mt-4">L'API est bientôt là ...</h2>

      {/* <hgroup className='flex-y gap-8 mt-10'>
        <p className="text-paragraph">
          Grâce à cette API gratuite, les développeurs et designers
          peuvent utiliser <br /> des avatars aléatoires en fonction de la race
          et du sexe.
        </p>
        <p className='text-small'>
          Copiez les liens ci-dessous et collez-les dans la balise src <br />
          de votre image web :
        </p>
      </hgroup>

      <div className="flex-y mt-8 gap-10 items-center w-full px-[4%]">
        <CopyUrl
          htmlToDisplay={
            <pre>
              <code className='text-indigo-500'>{'<img src='}</code>
              <code className="text-green-600">{`"https://avatarlustr.io/public"`}</code>
              <code className='text-indigo-500'>{' />'}</code>
            </pre>
          }
          textToCopy='<img src="https://avatarlustr.io/public" />' />

        <span className="flex-y items-center gap-6">
          <h3 className="text-H3">Obtenir un avatar aléatoire</h3>
          <CopyUrl htmlToDisplay='https://avatarlustr.io/public' textToCopy='https://avatarlustr.io/public' />
        </span>

        <div className='flex-y items-center gap-7 w-full'>
          <h2 className="text-H2 text-teal-500 font-medium mt-4">Avatars par sexe</h2>

          <AvatarAPI
            title="Avatar masculin"
            seeAll_link='/avatar?homme'
            seeAll_text='voir tous les avatars masculin'
            avatar_url='/avatars/1.svg'
            query='sexe=homme'
            api_url='https://avatarlustr.io/public/homme'
          />

          <AvatarAPI
            title="Avatar féminin"
            seeAll_link='/avatar?femme'
            seeAll_text='voir tous les avatars féminins'
            avatar_url='/avatars/2.svg'
            query='sexe=femme'
            api_url='https://avatarlustr.io/public/femme'
          />

          <h2 className="text-H2 text-teal-500 font-medium mt-4">Avatars par race</h2>

          <AvatarAPI
            title="Avatar aléatoire d’une race"
            avatar_url='/avatars/8.svg'
            api_url='https://avatarlustr.io/public/?race=caucasien'
          />

          <AvatarAPI
            title="Avatar masculin d’une race"
            avatar_url='/avatars/1.svg'
            api_url='https://avatarlustr.io/public/homme?race=afro'
          />

          <AvatarAPI
            title="Avatar féminin d’une race"
            avatar_url='/avatars/2.svg'
            api_url='https://avatarlustr.io/public/femme?race=afro'
          />

        </div>

      </div> */}



    </section>
  )
}
interface AvatarAPIProps {
  title: string,
  avatar_url: string,
  api_url: string,
  query?: string,
  seeAll_link?: string
  seeAll_text?: string
}

function AvatarAPI({ title, avatar_url, api_url, seeAll_link, query, seeAll_text }: AvatarAPIProps) {
  return (
    <hgroup className='flex-y items-center gap-4 w-full'>
        <h3 className="text-H3">{title}</h3>
        {seeAll_link && <Link href={{ pathname: '/avatars', query: query }} className='text-indigo-500'>({seeAll_text})</Link>}
        <Image alt='' src={avatar_url} height={170} width={170} />
        <CopyUrl htmlToDisplay={<pre>{api_url}</pre> } textToCopy={api_url} />
    </hgroup>
  )
}