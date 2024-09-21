const loadUsers = async () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve([
                { id: 1, name: 'John' },
                { id: 2, name: 'Jane' },
            ])
        }, 2000)
    })
}

const loadRepositories = async () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve([
                { id: 1, name: 'Repository 1' },
                { id: 2, name: 'Repository 2' },
            ])
        }, 2000)
    })
}

const loadEvents = async () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve([
                { id: 1, name: 'Event 1' },
                { id: 2, name: 'Event 2' },
            ])
        }, 2000)
    })

}
