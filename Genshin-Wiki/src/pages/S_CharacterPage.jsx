import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";
import apiConfig from "../config";

const S_CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`${apiConfig.API_URL}/characters/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch character data");
        }
        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        navigate("/error");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id, navigate]);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this character?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8A252C",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`${apiConfig.API_URL}/characters/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete character");
        }
        navigate("/characters");
      } catch (err) {
        console.error("Error deleting character:", err);
        Swal.fire("Error", "There was a problem deleting the character", "error");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <div className="bg-slate-100 w-8/12 bg-opacity-90 py-8 px-10 my-10 rounded-lg">
        <Link to="/characters">
          <FaArrowLeft />
        </Link>
        <div className="flex justify-end">
          <button
            onClick={handleDelete}
            className="mt-4 bg-red-800 text-white font-semibold py-2 px-4 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
        <div className="flex border border-yellow-500 px-8 pb-8 pt-4 m-8 rounded-md">
          <div className="p-4 w-8/12">
            <span className="block my-8 text-xl font-bold">About {character.name}</span>
            <p className="text-16">{character.description}</p>
          </div>

          <div className="border border-slate-500 w-4/12 flex flex-col items-center py-8">
            <img
              src={character.image_url}
              alt={character.name}
              className={`h-40 w-auto rounded mb-4 ${
                character.rarity == 5 ? "bg-yellow-600" : "bg-purple-700"
              }`}
            />
            <table className="border border-collapse border-slate-500 w-11/12">
              <tbody>
                <tr>
                  <td className="border border-slate-500 pl-3 w-5/12 bg-slate-300">Name:</td>
                  <td className="border border-slate-500 text-center">{character.name}</td>
                </tr>
                <tr>
                  <td className="border border-slate-500 pl-3 w-5/12 bg-slate-300">Rarity:</td>
                  <td className="border border-slate-500 text-center">{character.rarity}</td>
                </tr>
                <tr>
                  <td className="border border-slate-500 pl-3 w-5/12 bg-slate-300">Vision:</td>
                  <td className="border border-slate-500 text-center">{character.vision}</td>
                </tr>
                <tr>
                  <td className="border border-slate-500 pl-3 w-5/12 bg-slate-300">Weapon:</td>
                  <td className="border border-slate-500 text-center">{character.weapon}</td>
                </tr>
                <tr>
                  <td className="border border-slate-500 pl-3 w-5/12 bg-slate-300">Obtain:</td>
                  <td className="border border-slate-500 text-center">{character.obtain}</td>
                </tr>
                <tr>
                  <td className="border border-slate-500 pl-3 w-5/12 bg-slate-300">Birthday:</td>
                  <td className="border border-slate-500 text-center">{character.birthday}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S_CharacterPage;
