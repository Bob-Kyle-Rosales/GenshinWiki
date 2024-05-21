import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

const CharacterList = ({ characters }) => {
  return (
    <div className="grid lg:grid-cols-5 sm:grid-cols-3 gap-4 mt-4">
      {characters.map((character) => (
        <NavLink
          key={character.id}
          to={`/characters/${character.id}`}
          className={`border border-slate-400 p-4 rounded-md flex flex-col items-center transition transform hover:scale-105 cursor-pointer ${
            character.rarity == 5 ? "hover:border-yellow-500" : "hover:border-purple-500"
          }`}
        >
          <img
            src={character.image_url}
            alt={character.name}
            className={`h-20 w-auto rounded ${
              character.rarity == 5 ? "bg-yellow-600" : "bg-purple-700"
            }`}
          />
          <Typography variant="body1" mt={2}>
            {character.name}
          </Typography>
        </NavLink>
      ))}
    </div>
  );
};

export default CharacterList;
