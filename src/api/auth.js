import { request } from '@/api/request'

export default class authService {

    static async login(data, url) {
        return await request(`${url}/auth/login`, 'post', JSON.stringify({ email: data.email, password: data.password }), true, null)
    }

    static async signup(data, url) {
        return await request(`${url}/auth/signup`, 'post', JSON.stringify({ name: data.name, email: data.email, password: data.password }), true, null)
    }
    static async subscribe(data, url) {
        return await request(`${url}/auth/subscribe`, 'post', JSON.stringify({ email: data.email }), true, null)
    }
}