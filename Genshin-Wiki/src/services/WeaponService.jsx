import apiConfig from "../config";
import axios from "axios";

const API_URL = apiConfig.API_URL;

const getWeapons = async () => {
  return axios.get(`${API_URL}/weapons`).then((res) => res.data);
};

const createWeapon = async (weaponInfo) => {
  return axios.post(`${API_URL}/weapons`, weaponInfo).then((res) => res.data);
};

const updateWeapon = async (id, weaponInfo) => {
  return axios.put(`${API_URL}/weapons/${id}`, weaponInfo).then((res) => res.data);
};

const deleteWeapon = async (id) => {
  return axios.delete(`${API_URL}/weapons/${id}`).then((res) => res.data);
};

export { getWeapons, createWeapon, updateWeapon, deleteWeapon };
