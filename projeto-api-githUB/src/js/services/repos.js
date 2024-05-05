import { baseUrl } from "../variables.js"; 


async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=10`)
    return await response.json();
}

export { getRepos }