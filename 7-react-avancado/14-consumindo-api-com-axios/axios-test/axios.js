import axios from "axios";

export async function fetchUserDetails(element, username) {

    try {

        const response = await axios.get(`https://api.github.com/users/${username}`);

        //console.log(response);

        const user = response.data

        element.innerHTML = `
            <img src=${user.avatar_url} alt=${user.name} />

            <h1>${user.name ? user.name : "No name"}</h1>

            <p>${user.bio ? user.bio : "No bio"}</p>
        
        `

    } catch (error) {
        console.error(`Error fetching GitHUb user: ${error.message}`);

        element.innerHtml = `<p> Error loading user data</p>`

    }
}










/*
Usando fetch
export async function fetchUserDetails(element, username) {

    try {

        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error(`GitHhub API returned  status code ${response.status}`);
        }

        const user = await response.json();

        element.innerHTML = `
            <img src=${user.avatar_url} alt=${user.name} />

            <h1>${user.name ? user.name : "No name"}</h1>

            <p>${user.bio ? user.bio : "No bio"}</p>
        
        `

    } catch (error) {
        console.error(`Error fetching GitHUb user: ${error.message}`);

        element.innerHtml = `<p> Error loading user data</p>`

    }
}
*/