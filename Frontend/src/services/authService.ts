import { axiosBaseQuery } from "../lib/axiosBaseQuery";

export const loginUser = async (credentials) => {
  return axiosBaseQuery({
    url: "/auth/login",
    method: "POST",
    data: credentials,
  });
};
