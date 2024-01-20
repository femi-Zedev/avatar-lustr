import Navbar from '@/components/Navbar'
import IntroSection from '@/components/IntroSection'
import FilterSection from '@/components/FilterSection'
import Footer from '@/components/Footer'
import AvatarCard from '@/components/UI/AvatarCard'
import ApiSection from '@/components/ApiSection'




export default function Home() {
  return (
   
      <main className="bg-primary-dark">
        <Navbar />
        <div className="w-full h-full">
          <IntroSection />
          <FilterSection />
          <div className="px-[5%] [background:linear-gradient(180deg,rgb(25,24,31)_0%,rgb(30,27,36)_100%)]">
            <AvatarCard />
          </div>
          <ApiSection />
        </div>
        <Footer />
      </main>
  )
}
