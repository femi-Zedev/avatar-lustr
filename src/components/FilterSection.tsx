import { Select, Tabs } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

const sexeFilter = [
  { label: 'Tous', value: "*" },
  { label: 'Homme', value: "M" },
  { label: 'Femme', value: "F" },
]

const raceFilter = [
  { label: 'Tous', value: "*" },
  { label: 'Afro', value: "afro" },
  { label: 'Asiat', value: "asiat" },
  { label: 'Amérindien', value: "amérindien" },
  { label: 'Caucasien', value: "caucasien" },
]

export default function FilterSection() {

  return (
    <section id='#avatars' className='w-full h-full flex-y_center gap-6 py-20'>
      <h2 className="text-H2">Filtrer par:</h2>


      <Filter filterTitle='Sexe' filterArray={sexeFilter} />
      <Filter filterTitle='Race' filterArray={raceFilter} />

    </section>
  )
}


function Filter({ filterArray, filterTitle }: { filterTitle: string, filterArray: { label: string, value: string }[] }) {

  const md = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {md ?
        <span className='w-full px-4 flex-y_center gap-4'>
          <p className="text-paragraph">{filterTitle}</p>
          <Tabs defaultValue="*" unstyled >
            <Tabs.List>
              {
                filterArray.map((el) => (
                  <Tabs.Tab key={el.label} value={el.value} >
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