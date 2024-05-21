import apiConfig from "../config";
import axios from "axios";

const API_URL = apiConfig.API_URL;

const getArtifacts = async (topic) => {
  return axios.get(`${API_URL}/artifacts?topic=${topic}`).then((res) => res.data);
};

const createArtifact = async (artifactInfo) => {
  return axios.post(`${API_URL}/artifacts`, artifactInfo).then((res) => res.data);
};

const updateArtifact = async (id, artifactInfo) => {
  return axios.put(`${API_URL}/artifacts/${id}`, artifactInfo).then((res) => res.data);
};

const deleteArtifact = async (id) => {
  return axios.delete(`${API_URL}/artifacts/${id}`).then((res) => res.data);
};

export { getArtifacts, createArtifact, updateArtifact, deleteArtifact };
