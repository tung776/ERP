export default function({
    store,
    redirect
}) {
    console.log('store = ', store.getters["auth/authenticated"])
    if (!store.getters["auth/authenticated"]) {
        return redirect("/login")
    }
}