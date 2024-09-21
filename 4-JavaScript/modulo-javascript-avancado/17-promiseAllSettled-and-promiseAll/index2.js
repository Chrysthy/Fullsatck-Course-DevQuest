const loadUsers = async (username) => {

    const response = await fetch(`https://api.github.com/users/${username}`)

    if (!response.ok) {
        throw new Error(`GitHub API returned status code ${response.status}`)
    }

    const user = await response.json()

    return user
}