import axios from "axios";

export default async function getData(URLString) {
    const response = await axios.get(URLString);
    return response.data
}