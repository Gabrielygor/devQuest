import { baseUrl } from "../variables.js"; 


async function repos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=10`)
    return await response.json();
}

export { repos }