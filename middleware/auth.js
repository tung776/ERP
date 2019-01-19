import checkAuth from "./check-auth";

export default async function({ store, req, redirect }) {
  // await checkAuth(store, req);
  if (!store.state.auth.loggedIn) {
    if (!process.server) {
      const unSetStorageUser = require("~/utils/auth").unSetStorageUser;
      await unSetStorageUser();
    }
    return redirect("/login");
  }
}
