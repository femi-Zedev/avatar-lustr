export interface AvatarProps {
  imgUrl: string;
  name: string;
  link: string;
  sexe: 'male' | 'female';
  race: 'caucasien' | 'oceanien' | 'afro' | 'asiat' | 'amerindien';
  author: string
}