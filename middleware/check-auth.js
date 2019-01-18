import {
    getUserFromCookie,
    getUserFromSession,
    getUserFromLocalStorage
} from '@/utils/auth'

export default function({
    store,
    req
}) {
    let loggedUser = null;
    if (process.server) {
        if (!req) {
            return false
        }
        loggedUser = getUserFromSession(req, store)
    } else {
        loggedUser = getUserFromLocalStorage()
    }

    if (loggedUser) {
        if (store) {
            store.dispatch('auth/setUser', loggedUser)
            store.dispatch('database/setLastDataBase', loggedUser.lastDb)
            store.dispatch('auth/setLogged', true)
        }
        return true
    } else {
        if (store) {
            store.dispatch('auth/setUser', null)
            store.dispatch('database/setLastDataBase', null)
            store.dispatch('auth/setLogged', false)
        }
        return false
    }
}