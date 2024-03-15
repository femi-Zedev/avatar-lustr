import { AvatarProps } from "@/interfaces/avatar";

// fetch baseUrl

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const avatarsArray: AvatarProps[] = [
  { imgUrl: 'avatars/2.svg', name: 'afro-F', link: `/avatars/2.svg`, sexe: 'femme', race: 'afro', author: 'Gilka' },
  { imgUrl: 'avatars/3.svg', name: 'amerindien-F', link: `/avatars/3.svg`, sexe: 'femme', race: 'amerindien', author: 'Gilka' },
  { imgUrl: 'avatars/9.svg', name: 'oceanien-F', link: `/avatars/9.svg`, sexe: 'femme', race: 'oceanien', author: 'Gilka' },
  { imgUrl: 'avatars/7.svg', name: 'caucasien-F', link: `/avatars/7.svg`, sexe: 'femme', race: 'caucasien', author: 'Gilka' },
  { imgUrl: 'avatars/5.svg', name: 'asiat-F', link: `/avatars/5.svg`, sexe: 'femme', race: 'asiat', author: 'Gilka' },

  { imgUrl: 'avatars/1.svg', name: 'afro-H', link: `/avatars/1.svg`, sexe: 'homme', race: 'afro', author: 'Gilka' },
  { imgUrl: 'avatars/4.svg', name: 'amerindien-H', link: `/avatars/4.svg`, sexe: 'homme', race: 'amerindien', author: 'Gilka' },
  { imgUrl: 'avatars/10.svg', name: 'oceanien-H', link: `/avatars/10.svg`, sexe: 'homme', race: 'oceanien', author: 'Gilka' },
  { imgUrl: 'avatars/8.svg', name: 'caucasien-H', link: `/avatars/8.svg`, sexe: 'homme', race: 'caucasien', author: 'Gilka' },
  { imgUrl: 'avatars/6.svg', name: 'asiat-H', link: `/avatars/6.svg`, sexe: 'homme', race: 'asiat', author: 'Gilka' },
]
