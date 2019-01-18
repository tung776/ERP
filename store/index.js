// export const actions = {
//     async nuxtServerInit({
//         dispatch
//     }, req) {
//         console.log("req.session = ", req.cookie)
//         const user = {}
//         const lastDb = ""
//         if (req.session) {
//             if (req.session.cookie.expires) {
//                 const user = {}
//                 user = {
//                     uId,
//                     uName,
//                     profileId,
//                     kanbanSettings
//                 } = req.session
//             }
//             lastDb = req.session.lastDb;

//             await dispatch("auth/setUser", user)
//             await dispatch("auth/setLogged", true)
//             await dispatch("database/setLastDataBase", lastDb)
//         } else {
//             await dispatch("auth/setUser", {})
//             await dispatch("auth/setLogged", false)
//             await dispatch("database/setLastDataBase", null)
//         }
//     }
// }