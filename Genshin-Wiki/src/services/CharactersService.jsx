import apiConfig from "../config";
import axios from "axios";

const API_URL = apiConfig.API_URL;

const getCharacters = async () => {
  return axios.get(`${API_URL}/characters`).then((res) => res.data);
};

const getCharacter = async (id) => {
  return axios.get(`${API_URL}/characters/${id}`).then((res) => res.data);
};

const createCharacter = async (characterInfo) => {
  return axios.post(`${API_URL}/characters`, characterInfo).then((res) => res.data);
};

const updateCharacter = async (id, characterInfo) => {
  return axios.put(`${API_URL}/characters/${id}`, characterInfo).then((res) => res.data);
};

const deleteCharacter = async (id) => {
  return axios.delete(`${API_URL}/characters/${id}`).then((res) => res.data);
};

export { getCharacters, getCharacter, createCharacter, updateCharacter, deleteCharacter };
