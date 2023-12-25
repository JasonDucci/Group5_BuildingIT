import Axios from "./Axios";

//get all arts function
export const getAllArtsService = async (
  category,
  year,
  medium,
  rate,
  search,
  pageNumber
) => {
  const { data } = await Axios.get(
    `/arts?category=${category}&year=${year}&medium=${medium}&rate=${rate}&search=${search}&pageNumber=${pageNumber}`
  );
  return data;
};

//get random arts homepage function
export const getRandomArtsService = async () => {
  const { data } = await Axios.get(`/arts/random/all`);
  return data;
};

//get arts by id function
export const getArtByIdService = async (id) => {
  const { data } = await Axios.get(`/arts/${id}`);
  return data;
};

//get top rated arts function
export const getTopRatedArtService = async () => {
  const { data } = await Axios.get(`/arts/rated/top`);
  return data;
};

//create review function
export const reviewArtService = async (token, id, review) => {
  const { data } = await Axios.post(`/arts/${id}/reviews`, review, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

//delete art function
export const deleteArtService = async (token, id) => {
  const { data } = await Axios.delete(`/arts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

//delete all arts function
export const deleteAllArtsService = async (token) => {
  const { data } = await Axios.delete(`/arts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

//creare art function
export const createArtService = async (token, art) => {
  const { data } = await Axios.post("/arts", art, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return true;
};

//update art function
export const updateArtService = async (token, id, art) => {
  const { data } = await Axios.put(`/arts/${id}`, art, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
