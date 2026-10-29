import axios from "axios";
import { auth } from "@/lib/firebase";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(async (config) => {
    const token = await auth.currentUser?.getIdToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});