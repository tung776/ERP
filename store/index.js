import checkAuth from '@/middleware/check-auth'
export const actions = {
    nuxtServerInit({
        req
    }) {
        checkAuth(this, req)
    }
}