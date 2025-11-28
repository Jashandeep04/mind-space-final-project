import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000/api";

const API_URL = `${API_BASE}/entries`;

export const getEntries = () => axios.get(API_URL);

export const createEntry = (entry) => axios.post(API_URL, entry);

export const deleteEntry = (id) => axios.delete(`${API_URL}/${id}`);
