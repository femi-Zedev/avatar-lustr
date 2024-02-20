import { RaceFilter, SexeFilter } from '@/interfaces/avatar';
import { Select, Tabs } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

interface FilterValueProp {
  label: string;
  value: string
}

const sexeFilter: FilterValueProp[] = [
  { label: 'Tous', value: "*" },
  { label: 'Homme', value: "homme" },
  { label: 'Femme', value: "femme" },
]

const raceFilter: FilterValueProp[] = [
  { label: 'Tous', value: "*" },
  { label: 'Afro', value: "afro" },
  { label: 'Asiat', value: "asiat" },
  { label: 'Amérindien', value: "amerindien" },
  { label: 'Caucasien', value: "caucasien" },
]

export default function FilterSection({onFilterChange}: {onFilterChange: (filter: RaceFilter | SexeFilter) => void }) {

  return (
    <section id='#avatars' className='w-full h-full flex-y_center gap-6 pt-10'>
      <h2 className="text-H2">Filtrer par:</h2>
      <Filter onChange={(filter) => onFilterChange(filter as RaceFilter | SexeFilter)} filterTitle='Sexe' filterArray={sexeFilter} />
      <Filter onChange={(filter) => onFilterChange(filter  as RaceFilter | SexeFilter)} filterTitle='Race' filterArray={raceFilter} />
    </section>
  )
}


function Filter({ filterArray, filterTitle, onChange }: { filterTitle: string, filterArray: FilterValueProp[], onChange: (filter: object) => void}) {

  const md = useMediaQuery("(min-width: 768px)");

  function handleFilterChange(key: string, value: string | null){
    let object: { [key: string]: string | null } = {};
    object[key.toLocaleLowerCase()] = value;
    onChange(object)
  }

  return (
    <>
      {md ?
        <span className='w-full px-4 flex-y_center gap-4'>
          {/* <p className="text-paragraph">{filterTitle}</p> */}
          <Tabs defaultValue="*" unstyled onChange={(value) => handleFilterChange(filterTitle, value) }>
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