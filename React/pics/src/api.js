//https://api.unsplash.com/search/photos

//HTTP Authorization header;
//Authorization: "Cliend-ID DhRAFg1Z_aV3aJm2kvzZ6c7y6RgiUWC0z1Zq1HtYit8"

//param Desciption
//query Search terms
import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID pMOSe8QEDBqcL6jEdg4_Dy677byBqfoyn2klWBxKywY",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
