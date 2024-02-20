import FilterSection from '@/components/FilterSection'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import AvatarCard from '@/components/UI/AvatarCard';
import { avatarsArray } from '@/data/avatars';
import { AvatarProps } from '@/interfaces/avatar';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

interface Race {
  race: string;
}

interface Sexe {
  sexe: string;
}


interface FilterProp {
  race: string; sexe: string
}

const isAllFilters = (tmpFilter: FilterProp) => {
  if (tmpFilter.race === '*' && tmpFilter.sexe === '*') return true
}
export default function Avatars() {
  const [avatars, setAvatars] = useState<AvatarProps[]>([]);
  const [filters, setFilters] = useState<FilterProp>({ sexe: '*', race: '*' });
  const router = useRouter()

  const query = router.query;

  console.log(query)
  
  useEffect(() => {
    setAvatars(avatarsArray)
  }, []);

  useEffect(() => {
    if ('sexe' in query) {
      handleFilter({ sexe: query.sexe as string })
    }
  }, [query])





  function handleFilter(selected: Race | Sexe) {

    let filteredArray: AvatarProps[] = []
    filteredArray = [...avatars]
    let tmp = filters


    if ('race' in selected) {
      tmp.race = selected.race
      setFilters(tmp)
      if (isAllFilters(tmp)) return setAvatars(avatarsArray)
    }

    if ('sexe' in selected) {
      tmp.sexe = selected.sexe
      setFilters(tmp)
      if (isAllFilters(tmp)) return setAvatars(avatarsArray)
    }

    if (tmp.race === '*') {
      filteredArray = avatarsArray.filter(avatar => avatar.sexe === filters.sexe)
      return setAvatars(filteredArray)
    }

    if (tmp.sexe === '*') {
      filteredArray = avatarsArray.filter(avatar => avatar.race === filters.race)
      return setAvatars(filteredArray)
    }

    filteredArray = avatarsArray.filter(avatar => avatar.race === filters.race && avatar.sexe === filters.sexe)
    setAvatars(filteredArray);

  }
  return (
    <main className="bg-primary-dark">
      <Navbar />
      <FilterSection onFilterChange={(value) => handleFilter(value)} />
      <div className="w-full grid grid-cols-2 md:flex flex-wrap justify-center gap-4 md:gap-8 px-4 md:px-[5%] py-20 ">
        {
          avatars.map(({ imgUrl, author, link, name, race, sexe }, i) => (
            <div key={i} className='col-span-1 hover:shadow-gray-950 hover:shadow-2xl  rounded-2xl lg:rounded-3xl '>
              <AvatarCard
                imgUrl={imgUrl}
                author={author}
                link={link}
                name={name}
                race={race}
                sexe={sexe}
              />
            </div>
          ))
        }

      </div>
      <Footer withRate={false} />
    </main>
  )
}
