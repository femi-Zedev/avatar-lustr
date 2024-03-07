"use client";
import { PropsWithChildren, ReactNode, createContext, useContext, useMemo, useState } from "react";

export enum sexeType {
	All = "*",
	Male = "homme",
	Female = "femme",
}

interface FilterProviderProps {
	sexe: sexeType;
	setSexe: (value: sexeType) => void;
  race: string
	setRace: (value: string) => void;
}

const defaultFilterState: FilterProviderProps = {
	sexe: sexeType.All,
	setSexe: () => {},
	race: "",
	setRace: () => {},
};

const FilterContext = createContext(defaultFilterState);

export const useFilter = () => useContext(FilterContext);

export default function FilterProvider({ children }: PropsWithChildren) {
	const [race, setRace] = useState('*');
	const [sexe, setSexe] = useState<sexeType>(sexeType.All);

	const contextValue = useMemo<FilterProviderProps>(() => {
		return {
			sexe,
			setSexe: (value) => setSexe(value),
			race,
			setRace: (value) => setRace(value),
		};
	}, [sexe, race]);

	return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>;
}
