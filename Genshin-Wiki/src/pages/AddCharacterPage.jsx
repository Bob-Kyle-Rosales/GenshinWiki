import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  TextField,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  alpha,
} from "@mui/material";
import { createCharacter } from "../services/CharactersService";

const AddCharacterPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createCharacterMutation = useMutation({
    mutationFn: createCharacter,
    onSuccess: () => {
      queryClient.invalidateQueries("characters");
    },
  });

  const onSubmit = async (data) => {
    try {
      await createCharacterMutation.mutateAsync(data);
      navigate("/characters");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box
        sx={{
          bgcolor: alpha("#f5f5f5", 0.9),
          p: 8,
          my: 10,
          borderRadius: 4,
          width: "75%",
        }}
      >
        <Link to="/characters" style={{ textDecoration: "none", color: "#000" }}>
          <FaArrowLeft />
        </Link>

        <Box p={4}>
          <Typography variant="h5" fontWeight="bold" mt={2} mb={4}>
            Add Character
          </Typography>

          <Box border="1px solid #FBBF24" borderRadius={8} p={4} mb={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                    sx={{ backgroundColor: "#f8f8f8", mb: 2 }}
                  />
                )}
              />

              <Controller
                name="description"
                control={control}
                defaultValue=""
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.description}
                    helperText={errors.description ? errors.description.message : ""}
                    sx={{ backgroundColor: "#f8f8f8", mb: 2 }}
                  />
                )}
              />

              <FormControl fullWidth required sx={{ backgroundColor: "#f8f8f8", mb: 2 }}>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId="gender-label"
                      label="Gender"
                      error={!!errors.gender}
                    >
                      <MenuItem value="">
                        <em>Select Gender</em>
                      </MenuItem>
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              <Controller
                name="birthday"
                control={control}
                defaultValue=""
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Birthday"
                    variant="outlined"
                    fullWidth
                    error={!!errors.birthday}
                    helperText={errors.birthday ? errors.birthday.message : ""}
                    sx={{ backgroundColor: "#f8f8f8", mb: 2 }}
                  />
                )}
              />
              <FormControl fullWidth required sx={{ backgroundColor: "#f8f8f8", mb: 2 }}>
                <InputLabel id="rarity-label">Rarity</InputLabel>
                <Controller
                  name="rarity"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId="rarity-label"
                      label="Rarity"
                      error={!!errors.rarity}
                    >
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              <FormControl fullWidth required sx={{ backgroundColor: "#f8f8f8", mb: 2 }}>
                <InputLabel id="vision-label">Vision</InputLabel>
                <Controller
                  name="vision"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId="vision-label"
                      label="Vision"
                      error={!!errors.vision}
                    >
                      <MenuItem value="geo">Geo</MenuItem>
                      <MenuItem value="pyro">Pyro</MenuItem>
                      <MenuItem value="anemo">Anemo</MenuItem>
                      <MenuItem value="cryo">Cryo</MenuItem>
                      <MenuItem value="hydro">Hydro</MenuItem>
                      <MenuItem value="electro">Electro</MenuItem>
                      <MenuItem value="dendro">Dendro</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
              <FormControl fullWidth required sx={{ backgroundColor: "#f8f8f8", mb: 2 }}>
                <InputLabel id="weapon-label">Weapon</InputLabel>
                <Controller
                  name="weapon"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      labelId="weapon-label"
                      label="Weapon"
                      error={!!errors.weapon}
                    >
                      <MenuItem value="">
                        <em>Select Weapon</em>
                      </MenuItem>
                      <MenuItem value="bows">Bows</MenuItem>
                      <MenuItem value="polearms">Polearms</MenuItem>
                      <MenuItem value="sword">Sword</MenuItem>
                      <MenuItem value="claymore">Claymore</MenuItem>
                      <MenuItem value="catalyst">Catalyst</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>

              <Controller
                name="obtain"
                control={control}
                defaultValue=""
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Obtain"
                    variant="outlined"
                    fullWidth
                    error={!!errors.obtain}
                    helperText={errors.obtain ? errors.obtain.message : ""}
                    sx={{ backgroundColor: "#f8f8f8", mb: 2 }}
                  />
                )}
              />

              <Controller
                name="image_url"
                control={control}
                defaultValue=""
                rules={{ required: "This field is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Image URL"
                    variant="outlined"
                    fullWidth
                    error={!!errors.image_url}
                    helperText={errors.image_url ? errors.image_url.message : ""}
                    sx={{ backgroundColor: "#f8f8f8", mb: 2 }}
                  />
                )}
              />

              <Box display="flex" justifyContent="center">
                <Button type="submit" variant="contained" color="primary" fontWeight="bold">
                  Create
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddCharacterPage;
