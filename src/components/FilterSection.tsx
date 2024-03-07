import { RaceFilter, SexeFilter } from '@/interfaces/avatar';
import { useFilter } from '@/providers/filter.provider';
import { Select, Tabs, keys } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';

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

export default function FilterSection({onFilterChange }: {onFilterChange: (filter: RaceFilter | SexeFilter) => void }) {

  const { race, sexe } = useFilter()

  return (
    <section id='#avatars' className='w-full h-full flex-y_center gap-6 pt-10'>
      <h2 className="text-H2">Filtrer par:</h2>
      <Filter defaultValue={race} onChange={(filter) => onFilterChange(filter as RaceFilter | SexeFilter)} filterTitle='Sexe' filterArray={sexeFilter} />
      <Filter defaultValue={sexe} onChange={(filter) => onFilterChange(filter as RaceFilter | SexeFilter)} filterTitle='Race' filterArray={raceFilter} />
    </section>
  )
}


function Filter({ filterArray, defaultValue, filterTitle, onChange }: { filterTitle: string, defaultValue: string, filterArray: FilterValueProp[], onChange: (filter: object) => void}) {

  const md = useMediaQuery("(min-width: 768px)");

  const [active, setActive] = useState<string | null>(defaultValue);

  function handleFilterChange(key: string, value: string | null){
    let object: { [key: string]: string | null } = {};
    object[key.toLocaleLowerCase()] = value;
    setActive(value)
    onChange(object)
  }

  useEffect(() => {
    handleFilterChange(defaultValue!, defaultValue!)
  }, [defaultValue])
  

  return (
    <>
      {md ?
        <span className='w-full px-4 flex-y_center gap-4'>
          {/* <p className="text-paragraph">{filterTitle}</p> */}
          <Tabs value={active}   unstyled onChange={(value) => handleFilterChange(filterTitle, value) }>
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
            onChange={(value) => handleFilterChange(filterTitle, value) }
            placeholder="Sélectionnez un filtre"
            data={filterArray}
          />
        </hgroup>
      }
    </>

  )
}