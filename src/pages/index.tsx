import Navbar from '@/components/Navbar'
import IntroSection from '@/components/IntroSection'
import FilterSection from '@/components/FilterSection'
import Footer from '@/components/Footer'
import AvatarCard from '@/components/UI/AvatarCard'
import ApiSection from '@/components/ApiSection'
import { AvatarProps } from '@/interfaces/avatar'
import { useEffect, useState } from 'react'

const avatarsArray: AvatarProps[] = [
  { imgUrl: 'avatars/2.svg', name: 'afro-F', link: '', sexe: 'female', race: 'afro', author: 'Gilka' },
  { imgUrl: 'avatars/3.svg', name: 'amerindien-F', link: '', sexe: 'female', race: 'amerindien', author: 'Gilka' },
  { imgUrl: 'avatars/9.svg', name: 'oceanien-F', link: '', sexe: 'female', race: 'oceanien', author: 'Gilka' },
  { imgUrl: 'avatars/7.svg', name: 'caucasien-F', link: '', sexe: 'female', race: 'caucasien', author: 'Gilka' },
  { imgUrl: 'avatars/5.svg', name: 'asiat-F', link: '', sexe: 'female', race: 'asiat', author: 'Gilka' },

  { imgUrl: 'avatars/1.svg', name: 'afro-H', link: '', sexe: 'male', race: 'afro', author: 'Gilka' },
  { imgUrl: 'avatars/4.svg', name: 'amerindien-H', link: '', sexe: 'male', race: 'amerindien', author: 'Gilka' },
  { imgUrl: 'avatars/10.svg', name: 'oceanien-H', link: '', sexe: 'male', race: 'oceanien', author: 'Gilka' },
  { imgUrl: 'avatars/8.svg', name: 'caucasien-H', link: '', sexe: 'male', race: 'caucasien', author: 'Gilka' },
  { imgUrl: 'avatars/6.svg', name: 'asiat-H', link: '', sexe: 'male', race: 'asiat', author: 'Gilka' },
]

interface FilterProp {
  race: string; sexe: string
}
export default function Home() {
  const [avatars, setAvatars] = useState<AvatarProps[]>([]);
  const [filters, setFilters] = useState<FilterProp>({ sexe: '*', race: '*' });

  // Assuming avatarsArray is defined here

  useEffect(() => {
    setAvatars(avatarsArray)
  }, []);
  interface Race {
    race: string;
  }

  interface Sexe {
    sexe: string;
  }

  const isAllFilters = (tmpFilter: FilterProp) => {
    if (tmpFilter.race === '*' && tmpFilter.sexe === '*') return true
  }

  function handleFilter(selected: Race | Sexe) {

    let filteredArray: AvatarProps[] = []
    filteredArray = [...avatars]
    let tmp = filters


    if ('race' in selected) {
      tmp.race = selected.race
      setFilters(tmp)
      if(isAllFilters(tmp)) return setAvatars(avatarsArray)
    }

    if ('sexe' in selected) {
      tmp.sexe = selected.sexe
      setFilters(tmp)
      if(isAllFilters(tmp)) return setAvatars(avatarsArray)
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
      <div className="w-full h-full">
        <IntroSection />
        <FilterSection onFilterChange={(value) => handleFilter(value)} />
        <div className="w-full grid grid-cols-2 md:flex flex-wrap justify-center gap-4 md:gap-8 px-4 md:px-[5%] [background:linear-gradient(180deg,rgb(25,24,31)_0%,rgb(30,27,36)_100%)]">
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
        <ApiSection />
      </div>
      <Footer />
    </main>
  )
}
