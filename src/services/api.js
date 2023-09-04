import axios from "axios";

export const api = axios.create({
    baseURL: 'https://walberttynotes-api.onrender.com'
});

//api.get("/users/:id");
