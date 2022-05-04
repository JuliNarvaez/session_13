import getDataXHR from "../xhrRequest";
import getDataAxios from "../axiosRequest";
import getDataFetch from "../fetchRequest";

const URLString = "https://pokeapi.co/api/v2/pokemon/ditto";

getDataXHR(URLString).then(console.log)
getDataAxios(URLString).then(console.log)
getDataFetch(URLString).then(console.log)