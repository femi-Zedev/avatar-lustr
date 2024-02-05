"use client"
import { Select, Tabs } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import React, { useState } from 'react';
import FilterData from './FilterData';
import { AvatarProps } from '@/interfaces/avatar'; 


const sexeFilter = [
  { label: 'Tous', value: "*" },
  { label: 'Homme', value: "male" },
  { label: 'Femme', value: "female" },
]

const raceFilter = [
  { label: 'Tous', value: "*" },
  { label: 'Afro', value: "afro" },
  { label: 'Asiat', value: "asiat" },
  { label: 'Amérindien', value: "amérindien" },
  { label: 'Caucasien', value: "caucasien" },
]

const avatars: AvatarProps[] = [
  { imgUrl: 'avatars/afro-H.svg', name: '', link: '', sexe: 'male', race: 'afro', author: 'Gilka' },
  { imgUrl: 'avatars/amerindien-H.svg', name: '', link: '', sexe: 'male', race: 'amerindien', author: 'Gilka' },
  { imgUrl: 'avatars/oceanien-H.svg', name: '', link: '', sexe: 'male', race: 'oceanien', author: 'Gilka' },
  { imgUrl: 'avatars/caucasien-H.svg', name: '', link: '', sexe: 'male', race: 'caucasien', author: 'Gilka' },
  { imgUrl: 'avatars/asiat-H.svg', name: '', link: '', sexe: 'male', race: 'asiat', author: 'Gilka' },

  { imgUrl: 'avatars/afro-F.svg', name: '', link: '', sexe: 'female', race: 'afro', author: 'Gilka' },
  { imgUrl: 'avatars/amerindien-F.svg', name: '', link: '', sexe: 'female', race: 'amerindien', author: 'Gilka' },
  { imgUrl: 'avatars/oceanien-F.svg', name: '', link: '', sexe: 'female', race: 'oceanien', author: 'Gilka' },
  { imgUrl: 'avatars/caucasien-F.svg', name: '', link: '', sexe: 'female', race: 'caucasien', author: 'Gilka' },
  { imgUrl: 'avatars/asiat-F.svg', name: '', link: '', sexe: 'female', race: 'asiat', author: 'Gilka' },
]


 enum Gender {
  male = 'male', 
  female = 'female',
  both = '*'
 }


export default function FilterSection() {

  const [avatarsArr, setAvatarsArr] = useState<AvatarProps[]>(avatars); 

  const [sexeFilterValue, setSexeFilterValue] = useState<"male" | "female" | "*">("*"); 

  const [raceFilterValue, setRaceFilterValue] = useState("*"); 

  const pull_data : any = (filterValue :"male" | "female", filterTitle: string) => {

    if(filterTitle =="Sexe") {
      setSexeFilterValue(filterValue); 
    } else {
      setRaceFilterValue(filterValue); 
    }
   
   
    if(sexeFilterValue !== "*") {
      const filteredAvatar = avatars.filter((avatar) => avatar.sexe == filterValue) ;
      setAvatarsArr(filteredAvatar);
   } else 
     setAvatarsArr(avatars);
  

    

  }


  return (


    <section id='#avatars' className='w-full h-full flex-y_center gap-6 py-20'>
      <h2 className="text-H2">Filtrer par:</h2>


      <Filter filterTitle='Sexe' data={pull_data} filterArray={sexeFilter} />
      <Filter filterTitle='Race' data={pull_data} filterArray={raceFilter} />

      <FilterData data={avatarsArr} />

    </section>
  )
}


function Filter({ filterArray, data , filterTitle }: { filterTitle: string, data : any , filterArray: { label: string, value: string }[] }) {

  const md = useMediaQuery("(min-width: 768px)");

  const handleClick = (el : string , filterTitle : string ) => {

    data(el, filterTitle); 
     
  }


  return (
    <>
      {md ?
        <span className='w-full px-4 flex-y_center gap-4'>
          <p className="text-paragraph">{filterTitle}</p>
          <Tabs defaultValue="*" unstyled >
            <Tabs.List>
              {
                filterArray.map((el) => (
                  <Tabs.Tab key={el.label} value={el.value} onClick={() => handleClick(el.value, filterTitle)} >
                    {el.label}
                  </Tabs.Tab>
                ))
              }
            </Tabs.List>
          </Tabs>
        </span>
        :
        <hgroup className='flex flex-col items-center gap-2'>
          <p className='text-paragraph'>{filterTitle}</p>
          <Select
            size='md'
            defaultValue="*"
            placeholder="Sélectionnez un filtre"
            data={filterArray}
          />
        </hgroup>

      }
    </>

  )
}