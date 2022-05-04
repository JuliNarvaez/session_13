export default async function getData(URLString) {
    const response = await fetch(URLString);
    const data = response.json();
    return data;
}