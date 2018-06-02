const setStore = (name, content) => {
    if (!name) return

    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

const getStore = name => {
    if (!name) return
    return window.localStorage.getItem(name)
}

const removeStore = name => {
    if (!name) return
    window.localStorage.removeItem(name)
}

export default {
    setStore,
    getStore,
    removeStore
}