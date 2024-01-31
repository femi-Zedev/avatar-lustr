import Navbar from '@/components/Navbar'
import IntroSection from '@/components/IntroSection'
import FilterSection from '@/components/FilterSection'
import Footer from '@/components/Footer'
import AvatarCard from '@/components/UI/AvatarCard'
import ApiSection from '@/components/ApiSection'
import { AvatarProps } from '@/interfaces/avatar'

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


export default function Home() {
  return (

    <main className="bg-primary-dark">
      <Navbar />
      <div className="w-full h-full">
        <IntroSection />
        <FilterSection />
        <div className="w-full grid grid-cols-2 md:flex flex-wrap justify-center gap-4 md:gap-8 px-4 md:px-[5%] [background:linear-gradient(180deg,rgb(25,24,31)_0%,rgb(30,27,36)_100%)]">
          {
            avatars.map(({ imgUrl, author, link, name, race, sexe }, i) => (
              <div  key={i} className='col-span-1 hover:shadow-gray-950 hover:shadow-2xl  rounded-2xl lg:rounded-3xl '>
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
