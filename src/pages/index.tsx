import Navbar from '@/components/Navbar'
import IntroSection from '@/components/IntroSection'
import FilterSection from '@/components/FilterSection'
import Footer from '@/components/Footer'
import AvatarCard from '@/components/UI/AvatarCard'
import ApiSection from '@/components/ApiSection'

interface AvatarProps {
  imgUrl: string;
  name: string;
  link: string;
  sexe?: 'male' | 'female';
  race?: 'caucasien' | 'oceanien' | 'afro' | 'asiat' | 'amerindien'
}

const avatars: AvatarProps[] = [
  { imgUrl: 'avatars/afro-H.svg', name: '', link: '', sexe: 'male', race:'afro' },
  { imgUrl: 'avatars/amerindien-H.svg', name: '', link: '', sexe: 'male',  race:'amerindien' },
  { imgUrl: 'avatars/oceanien-H.svg', name: '', link: '', sexe: 'male', race:'oceanien' },
  { imgUrl: 'avatars/caucasien-H.svg', name: '', link: '', sexe: 'male',  race:'caucasien' },
  { imgUrl: 'avatars/asiat-H.svg', name: '', link: '', sexe: 'male',  race:'asiat' },

  { imgUrl: 'avatars/afro-F.svg', name: '', link: '', sexe: 'female',  race:'afro' },
  { imgUrl: 'avatars/amerindien-F.svg', name: '', link: '', sexe: 'female',  race:'amerindien' },
  { imgUrl: 'avatars/oceanien-F.svg', name: '', link: '', sexe: 'female', race:'oceanien' },
  { imgUrl: 'avatars/caucasien-F.svg', name: '', link: '', sexe: 'female',  race:'caucasien' },
  { imgUrl: 'avatars/asiat-F.svg', name: '', link: '', sexe: 'female',  race:'asiat' },
]


export default function Home() {
  return (

    <main className="bg-primary-dark">
      <Navbar />
      <div className="w-full h-full">
        <IntroSection />
        <FilterSection />
        <div className="flex flex-wrap justify-center gap-8 px-[5%] [background:linear-gradient(180deg,rgb(25,24,31)_0%,rgb(30,27,36)_100%)]">
          {
            avatars.map(({ imgUrl }, i) => (
              <div key={i} className=''>
                <AvatarCard imgUrl={imgUrl}  downloadUrl='' />
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
