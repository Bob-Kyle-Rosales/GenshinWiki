import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../context/DataContext";
import CharacterList from "../components/CharacterList";
import WeaponsList from "../components/WeaponsList";
import ArtifactList from "../components/ArtifactList";
import logo2 from "/logo2.png";

const HomePage = () => {
  const { characters, weapons, artifacts } = useData();

  return (
    <div className="flex justify-center">
      <div className="bg-slate-100 w-9/12 bg-opacity-90 py-8 px-10 my-10 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <img src={logo2} alt="logo2" className="h-40 w-auto md:h-40" />

          <span className="md:text-3xl sm:text-lg my-8">Welcome to Genshin Impact Wiki!</span>

          <span className="mt-8 mx-44 md:text-lg sm:text-sm sm:mx-20 text-center ">
            Genshin Impact is an action role-playing game developed by miHoYo, published by miHoYo
            in mainland China and worldwide by Cognosphere, d/b/a HoYoverse.
          </span>

          <span className="mb-8 mx-44 md:text-lg sm:text-sm sm:mx-20 text-center ">
            It was released for Android, iOS, PlayStation 4, and Windows in 2020, and on PlayStation
            5 in 2021
          </span>
        </div>

        <div className="mx-8 my-10">
          <span className="text-2xl sm:text-xl">Characters</span>
          <div className="border border-yellow-500 px-8 pb-8 pt-4">
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded my-4">
                <NavLink to="/characters">View more</NavLink>
              </button>
            </div>
            <CharacterList
              characters={characters.sort((a, b) => b.rarity - a.rarity).slice(0, 10)}
            />
          </div>
        </div>

        <div className="mx-8 my-10">
          <span className="text-2xl sm:text-xl">Weapons</span>
          <div className="border border-yellow-500 px-8 pb-8 pt-4">
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded my-4">
                <NavLink to="/weapons">View more</NavLink>
              </button>
            </div>
            <WeaponsList weapons={weapons.slice(0, 4)} />
          </div>
        </div>

        <div className="mx-8 my-10">
          <span className="text-2xl sm:text-xl">Artifacts</span>
          <div className="border border-yellow-500 px-8 pb-8 pt-4">
            <div className="flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded my-4">
                <NavLink to="/artifacts">View more</NavLink>
              </button>
            </div>
            <ArtifactList artifacts={artifacts.slice(0, 4)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
