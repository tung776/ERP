export default async function(currentUser, moduleId, actionName) {
    console.log('currentUser = ', currentUser)
    if (!currentUser || currentUser.profile || currentUser.profile.profileAccess) {
        return false
    }

    currentUser.profile.profileAccess.forEach(module => {
        console.log(`module.module = ${module.module} vs ${moduleId} && module.access[actionName] = ${module.access[actionName]}`)
        if (module.module == moduleId && module.profileAccess[moduleId].access[actionName]) return true
    });
}