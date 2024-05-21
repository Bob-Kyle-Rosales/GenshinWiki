import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { TextField, Button, Typography, Box, MenuItem, alpha } from "@mui/material";
import Swal from "sweetalert2";
import { createWeapon } from "../services/WeaponService";

const AddWeaponPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const createWeaponMutation = useMutation({
    mutationFn: createWeapon,
    onSuccess: () => {
      queryClient.invalidateQueries("weapons");
    },
  });

  const onSubmit = async (data) => {
    try {
      await createWeaponMutation.mutateAsync(data);
      Swal.fire({
        title: "Success",
        text: "Weapon created successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/weapons");
      });
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
        <Link to="/weapons" style={{ textDecoration: "none", color: "#000" }}>
          <FaArrowLeft />
        </Link>
        <Box p={4}>
          <Typography variant="h5" fontWeight="bold" mt={2} mb={4}>
            Add Weapon
          </Typography>
          <Box
            border="1px solid #FBBF24"
            borderRadius={8}
            sx={{
              "@media (min-width: 960px)": {
                pt: 8,
                pb: 4,
                px: 10,
              },
              "@media (max-width: 960px)": {
                pt: 4,
                pb: 2,
                px: 5,
              },
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mb={2}>
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
                      helperText={errors.name?.message}
                      sx={{ backgroundColor: "#f8f8f8" }}
                    />
                  )}
                />
              </Box>
              <Box mb={2}>
                <Controller
                  name="rarity"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Rarity"
                      variant="outlined"
                      fullWidth
                      select
                      error={!!errors.rarity}
                      helperText={errors.rarity?.message}
                      sx={{ backgroundColor: "#f8f8f8" }}
                    >
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                    </TextField>
                  )}
                />
              </Box>
              <Box mb={2}>
                <Controller
                  name="type"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Type"
                      variant="outlined"
                      fullWidth
                      select
                      error={!!errors.type}
                      helperText={errors.type?.message}
                      sx={{ backgroundColor: "#f8f8f8" }}
                    >
                      <MenuItem value="bows">Bows</MenuItem>
                      <MenuItem value="polearms">Polearms</MenuItem>
                      <MenuItem value="sword">Sword</MenuItem>
                      <MenuItem value="claymore">Claymore</MenuItem>
                      <MenuItem value="catalyst">Catalyst</MenuItem>
                    </TextField>
                  )}
                />
              </Box>
              <Box mb={2}>
                <Controller
                  name="atk"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Attack Damage"
                      variant="outlined"
                      fullWidth
                      error={!!errors.atk}
                      helperText={errors.atk?.message}
                      sx={{ backgroundColor: "#f8f8f8" }}
                    />
                  )}
                />
              </Box>
              <Box mb={2}>
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
                      helperText={errors.obtain?.message}
                      sx={{ backgroundColor: "#f8f8f8" }}
                    />
                  )}
                />
              </Box>
              <Box mb={2}>
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
                      helperText={errors.image_url?.message}
                      sx={{ backgroundColor: "#f8f8f8" }}
                    />
                  )}
                />
              </Box>
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

export default AddWeaponPage;
