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