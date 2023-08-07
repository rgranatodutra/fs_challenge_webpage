import axios, { AxiosInstance } from "axios";

export const baseURL = "http://localhost:8000";

export const api: AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000
});