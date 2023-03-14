import axios from "axios";
import { SignInEnum, SignUpAPIEnum } from "../types";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API = axios.create({ baseURL: BASE_URL });

const POST = async (url: string, data: any) => {
  try {
    const result = await API.post(url, data);
    if (result?.data) {
      if (
        typeof result?.data?.isSuccess === "boolean" &&
        !result?.data?.isSuccess
      ) {
        throw result?.data;
      } else {
        return result?.data;
      }
    }
  } catch (error) {
    throw error;
  }
};

export const Auth = {
  SignIn: (data: SignInEnum) => POST("/login", data),
  SignUp: (data: SignUpAPIEnum) => POST("/users/create", data),
};
