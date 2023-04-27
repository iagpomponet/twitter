import { AxiosResponse } from "axios";
import { api } from "../api";
import { LoginPayload, UserPayload } from "./types";
import { useMutation } from "react-query";

export const createUser = (payload: UserPayload) =>
  api.post("/users", payload).then((response: AxiosResponse) => response.data);

export const useCreateUser = () => useMutation(createUser);

export const authUser = (payload: LoginPayload) =>
  api.post("/auth", payload).then((response: AxiosResponse) => response.data);

export const useAuthUser = () => useMutation(authUser);
