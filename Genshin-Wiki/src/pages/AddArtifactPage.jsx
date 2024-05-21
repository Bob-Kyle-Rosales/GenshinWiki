import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { TextField, Button, Typography, Box, alpha } from "@mui/material";
import { createArtifact } from "../services/ArtifactService";
import Swal from "sweetalert2";

const AddArtifactPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const createArtifactMutation = useMutation({
    mutationFn: createArtifact,
    onSuccess: () => {
      queryClient.invalidateQueries("artifacts");
    },
  });

  const onSubmit = async (data) => {
    try {
      await createArtifactMutation.mutateAsync(data);
      Swal.fire({
        title: "Success",
        text: "Artifact creation was successful.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/artifacts");
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
        <Link to="/artifacts" style={{ textDecoration: "none", color: "#000" }}>
          <FaArrowLeft />
        </Link>
        <Box p={4}>
          <Typography variant="h5" fontWeight="bold" mt={2} mb={4}>
            Add Artifact
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
                      helperText={errors.name ? errors.name.message : ""}
                    />
                  )}
                />
              </Box>
              <Box mb={2}>
                <Controller
                  name="2_set_bonus"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="2-Set Bonus"
                      variant="outlined"
                      fullWidth
                      error={!!errors["2_set_bonus"]}
                      helperText={errors["2_set_bonus"] ? errors["2_set_bonus"].message : ""}
                    />
                  )}
                />
              </Box>
              <Box mb={2}>
                <Controller
                  name="4_set_bonus"
                  control={control}
                  defaultValue=""
                  rules={{ required: "This field is required" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="4-Set Bonus"
                      variant="outlined"
                      fullWidth
                      error={!!errors["4_set_bonus"]}
                      helperText={errors["4_set_bonus"] ? errors["4_set_bonus"].message : ""}
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
                      helperText={errors.image_url ? errors.image_url.message : ""}
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

export default AddArtifactPage;
