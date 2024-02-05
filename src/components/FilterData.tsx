import { AvatarProps } from "@/interfaces/avatar";
import AvatarCard from "./UI/AvatarCard";
import { ReactNode } from "react";
interface Props {
    data: AvatarProps[];
 }


const FilterData: React.FC<Props> = ({data}) => {


        return (
            <>
                <div className="w-full grid grid-cols-2 md:flex flex-wrap justify-center gap-4 md:gap-8 px-4 md:px-[5%] [background:linear-gradient(180deg,rgb(25,24,31)_0%,rgb(30,27,36)_100%)]">
                {
                    data.map(({ imgUrl, author, link, name, race, sexe }, i) => (
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
            </>
        )
}


export default FilterData ; 