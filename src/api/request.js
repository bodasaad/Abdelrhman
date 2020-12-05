async function request(url, method, body, contentType, jwt) {
    let res
    try {
        if (contentType) {
            if (method === 'post' || method === 'put') {
                res = await fetch(url, {
                    method: method,
                    headers: {
                        Authorization: "Bearer " + jwt,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: body
                })
            } else {
                res = await fetch(url, {
                    method: method,
                    headers: {
                        Authorization: "Bearer " + jwt,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
            }

        } else {
            if (method === 'post' || method === 'put') {
                res = await fetch(url, {
                    method: method,
                    headers: {
                        Authorization: "Bearer " + jwt,
                    },
                    body: body
                })
            } else {
                res = await fetch(url, {
                    method: method,
                    headers: {
                        Authorization: "Bearer " + jwt,
                    }
                })
            }

        }
        const json = await res.json()
        if (res.status == 200 || res.status == 201) {
            return { msg: json.message, json, state: true, code: res.status }
        } else {
            return { state: false, msg: json.message, code: res.status }
        }
    } catch (error) {
        return { state: false, msg: 'Something went wrong, please try again', code:500 }
    }
}

export { request }