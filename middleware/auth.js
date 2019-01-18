import checkAuth from './check-auth';

export default function({
    store,
    req,
    redirect
}) {
    checkAuth(store, req);
    if (!store.state.auth.loggedIn) {
        if (!process.server) {
            const unSetStorageUser = require("~/utils/auth").unSetStorageUser;
            unSetStorageUser();
        }
        return redirect("/login");
    }

}