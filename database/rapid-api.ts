import axios from "axios";
import { RAPID_API_KEY } from "src/env";

type BayutParams = {
  locationExternalIDs?: number;
  purpose: "for-sale" | "for-rent";
  page: number;
};

export const fetchApi = async ({
  locationExternalIDs,
  purpose,
  page,
}: BayutParams) => {
  const _page = String(page);
  let _locationExternalIDs;

  if (locationExternalIDs) {
    _locationExternalIDs = String(locationExternalIDs);
  }

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: _locationExternalIDs || "5002,6020",
      purpose,
      hitsPerPage: "25",
      page: _page,
      lang: "en",
      sort: "city-level-score",
    },
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    alert("Fetch RapidAPI Error");
    console.error(error);
  }
};
