export interface AvatarProps {
  imgUrl: string;
  name: string;
  link: string;
  sexe: 'homme' | 'femme';
  race: 'caucasien' | 'oceanien' | 'afro' | 'asiat' | 'amerindien';
  author: string
}

export interface RaceFilter {
  race: string;
}

export interface SexeFilter {
  sexe: string;
}