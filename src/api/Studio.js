import { request } from '@/api/request'

export default class Studio {

    static async getAllArticles(url) { return await request(`${url}/feed/articles`, 'get', {}, true) }
    static async getAllProjects(url) { return await request(`${url}/feed/projects`, 'get', {}, true) }
    static async getcomments(id, jwt, url) { return await request(jwt, `${url}/feed/comments/${id}`, 'get', {}, true) }
    static async addcomment(id, comment, jwt, url) { return await request(jwt, `${url}/feed/comments/${id}`, 'put', JSON.stringify({ comment: comment }), true) }
    static async getLikes(id, jwt, url) { return await request(jwt, `${url}/feed/likes/${id}`, 'get', { message: "Liked" }, true) }
    static async react(id, react, url, jwt) { return await request(`${url}/feed/react/${id}?react=${react}`, 'put', JSON.stringify({ message: "Liked" }), true, jwt) }
    static async newview(id, item, url) { return await request(`${url}/feed/view/${id}?item=${item}`, 'put', JSON.stringify({ message: "new" }), true, null) }

}