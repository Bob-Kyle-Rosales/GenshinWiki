import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../services/CharactersService";
import { getArtifacts } from "../services/ArtifactService";
import { getWeapons } from "../services/WeaponService";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const charactersQuery = useQuery({
    queryKey: ["characters"],
    queryFn: getCharacters,
  });

  const weaponsQuery = useQuery({
    queryKey: ["weapons"],
    queryFn: getWeapons,
  });

  const artifactsQuery = useQuery({
    queryKey: ["artifacts"],
    queryFn: getArtifacts,
  });

  return (
    <DataContext.Provider
      value={{
        characters: charactersQuery.data || [],
        weapons: weaponsQuery.data || [],
        artifacts: artifactsQuery.data || [],
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
