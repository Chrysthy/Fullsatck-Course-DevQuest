export async function fetchUserDetails(element, username) {

    try {

        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error(`GitHhub API returned  status code ${response.status}`);
        }

        const user = await response.json();

    } catch (error) {
        console.error(`Error fetching GitHUb user: ${error.message}`);

        element.innerHtml = `<p> Error loading user data</p>`

    }
}