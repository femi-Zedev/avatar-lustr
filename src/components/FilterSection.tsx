import { Tabs } from '@mantine/core'
import React from 'react';

const sexeFilter = [
  { label: 'Homme', value: "M" },
  { label: 'Femme', value: "F" },
  { label: 'Tous', value: "*" },
]

const raceFilter = [
  { label: 'Afro', value: "afro" },
  { label: 'Asiat', value: "asiat" },
  { label: 'Amérindien', value: "amérindien" },
  { label: 'Caucasien', value: "caucasien" },
  { label: 'Tous', value: "*" },
]

export default function FilterSection() {

  return (
    <section id='#avatars' className='w-full h-full flex-y_center gap-6 py-20'>
      <h2 className="text-H2">Filtrer par:</h2>


      <span className='flex-y_center gap-4'>
        <p className="text-paragraph">Sexe</p>
        <Tabs defaultValue="*" className="customTabs" unstyled >
          <Tabs.List>
            {
              sexeFilter.map((el) => (
                <Tabs.Tab  key={el.label}value={el.value} style={{ }} >
                  {el.label}
                </Tabs.Tab>
              ))
            }
          </Tabs.List>
        </Tabs>
      </span>

      <span className='flex-y_center gap-4'>
        <p className="text-paragraph">Race</p>
        <Tabs defaultValue="*" className="customTabs" unstyled >
          <Tabs.List>
            {
              raceFilter.map((el) => (
                <Tabs.Tab key={el.label} value={el.value} style={{ }} >
                  {el.label}
                </Tabs.Tab>
              ))
            }
          </Tabs.List>
        </Tabs>
      </span>



    </section>
  )
}
