import axios from "axios";
import { SignInEnum, SignUpAPIEnum } from "../enums";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API = axios.create({ baseURL: BASE_URL });

export const Auth = {
  SignIn: (data: SignInEnum) => API.post("/login", data),
  SignUp: (data: SignUpAPIEnum) => API.post("/users/create", data),
};
