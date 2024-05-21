import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaArrowLeft } from "react-icons/fa";
import { Box, Typography, Button } from "@mui/material";
import { getCharacter, deleteCharacter } from "../services/CharactersService";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

const S_CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await getCharacter(id);

        setCharacter(response);
      } catch (err) {
        navigate("/error");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  const deleteCharacterMutation = useMutation({
    mutationFn: deleteCharacter,
    onSuccess: () => {
      queryClient.invalidateQueries("characters");
      navigate("/characters");
    },
  });

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
      deleteCharacterMutation.mutate(id); // Trigger the delete mutation
    }
  };

  const renderContent = () => {
    return (
      <>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={handleDelete} variant="contained" color="error" sx={{ mt: 4, mb: 2 }}>
            Delete
          </Button>
        </Box>

        <div className="flex border border-yellow-500 px-8 pb-8 pt-4 m-8 rounded-md">
          <Box sx={{ p: 4, width: "66.66%" }}>
            <Typography variant="h5" fontWeight="bold" mt={8} mb={4}>
              About {character.name}
            </Typography>
            <Typography variant="body1" mt={8}>
              {character.description}
            </Typography>
          </Box>

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
      </>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="bg-slate-100 w-8/12 bg-opacity-90 py-8 px-10 my-10 rounded-lg">
        <Link to="/characters">
          <FaArrowLeft />
        </Link>

        {loading ? <Loading /> : renderContent()}
      </div>
    </div>
  );
};

export default S_CharacterPage;
