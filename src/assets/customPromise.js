export const customPromise = (burgers) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(burgers)
        }, 2000)
    })
}