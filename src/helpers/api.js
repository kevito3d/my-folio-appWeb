import { urlApi } from "./utils";

export const postApi = async (url, data) => {
  const response = await fetch(urlApi + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const getApi = async (url, token) => {
  const response = await fetch(urlApi + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-token": token,
    },

  });
  return response;
};
