import axios from "axios";
import { RAPID_API_KEY } from "src/env";

type BayutParams = {
  locationExternalIDs?: number;
  purpose: "for-sale" | "for-rent";
  page: number;
};

// export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchRapidApi = async (url: string) => {
  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return response.data;
};

export const fetchApartmentDetailsFromRapidApi = async (externalID: string) => {
  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/detail",
    params: {
      externalID,
    },
    headers: {
      "X-RapidAPI-Key": "4973675883mshfa7f05611f8e004p146dcdjsnee845f2f9d5a",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    alert("Fetch RapidAPI Error");
    console.error(error);
  }
};
