import { request } from '@/api/request'

export default class Admin {

    static async login(data, url) { return await request(`${url}/admin/login`, 'post', JSON.stringify({ email: data.email, password: data.password }), true) }
    static async getArticles(jwt, url) { return await request(`${url}/admin/articles`, 'get', {}, true, jwt) }
    static async getProjects(jwt, url) { return await request(`${url}/admin/projects`, 'get', {}, true, jwt) }


    static async addProject(data, jwt, url) { return await request(`${url}/admin/projects`, 'post', data, false, jwt) }
    static async getPorject(id, jwt, url) { return await request(`${url}/admin/projects/${id}`, 'get', {}, true, jwt) }
    static async editProject(data, id, jwt, url) { return await request(`${url}/admin/projects/${id}`, 'put', data, false, jwt) }
    static async deleteProject(id, jwt, url) { return await request(`${url}/admin/projects/${id}`, 'delete', {}, false, jwt) }


    static async addArticle(data, jwt, url) { return await request(`${url}/admin/articles`, 'post', data, false, jwt) }
    static async getArticle(id, jwt, url) { return await request(`${url}/admin/articles/${id}`, 'get', {}, true, jwt) }
    static async editArticle(data, id, jwt, url) { return await request(`${url}/admin/articles/${id}`, 'put', data, false, jwt) }
    static async deleteArticle(id, jwt, url) { return await request(`${url}/admin/articles/${id}`, 'delete', {}, false, jwt) }



    static async getUser(id, jwt, url) { return await request(`${url}/admin/users/${id}`, 'get', {}, false, jwt) }
    static async getUsers(jwt, url) { return await request(`${url}/admin/users`, 'get', {}, false, jwt) }
    static async deleteUsers(id, jwt, url) { return await request(`${url}/admin/users/${id}`, 'delete', {}, false, jwt) }


    static async getCategories(url) { return await request(`${url}/admin/category/`, 'get', {}, true) }
    static async editCategory(data, jwt, url) { return await request(`${url}/admin/category`, 'post', data, false, jwt) }
    static async addCategory(data, jwt, url) { return await request(`${url}/admin/category`, 'post', data, false, jwt) }
    static async deleteCategory(id, jwt, url) { return await request(`${url}/admin/category/${id}`, 'delete', {}, false, jwt) }


    
}