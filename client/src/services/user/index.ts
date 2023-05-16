import { AxiosResponse } from "axios";
import { api } from "../api";
import { LoginPayload, UserPayload } from "./types";
import { useMutation, useQuery } from "react-query";

const getUser = () =>
  api.get("/users").then((response: AxiosResponse) => response.data);

export const useGetUser = () => useQuery("user", getUser);

export const createUser = (payload: UserPayload) =>
  api.post("/users", payload).then((response: AxiosResponse) => response.data);

export const useCreateUser = () => useMutation(createUser);

export const authUser = (payload: LoginPayload) =>
  api
    .post("/users/auth", payload)
    .then((response: AxiosResponse) => response.data);

export const useAuthUser = () => useMutation(authUser);
