const apiUrl = "http://localhost:3000/";
// const apiUrl = "https://todonode-d031a.web.app/";
let user = JSON.parse(localStorage.getItem('user'));
let token = user.token;
export default {
    get: (url, data, basicAuth) => {
        return fetch(apiUrl + url, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "authorization": basicAuth === "basicAuth" ? "nearBy:nearBy" : "Bearer  " + token
                },
            })
            .then((res) => {
                return res.json()
                    .then((json) => {
                        return json;
                    })
            })
            .catch(err => {
                console.log("api post error:", err);
                throw err;
            });
    },
    post: (url, data, basicAuth) => {
        return fetch(apiUrl + url, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "authorization": basicAuth === "basicAuth" ? "nearBy:nearBy" : "Bearer " + token
                },
                body: JSON.stringify(data)
            })
            .then((res) => {
                return res.json()
                    .then((json) => {
                        return json;
                    })
            })
            .catch(err => {
                console.log("api post error:", err);
                throw err;
            });
    },
    patch: (url, data, basicAuth) => {
        return fetch(apiUrl + url, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "authorization": basicAuth === "basicAuth" ? "nearBy:nearBy" : "Bearer " + token
                },
                body: JSON.stringify(data)
            })
            .then((res) => {
                return res.json()
                    .then((json) => {
                        return json;
                    })
            })
            .catch(err => {
                console.log("api post error:", err);
                throw err;
            });
    },
    put: (url, data, basicAuth) => {
        return fetch(apiUrl + url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    "authorization": basicAuth === "basicAuth" ? "nearBy:nearBy" : "Bearer " + token
                },
                ...data && { body: JSON.stringify(data) }
            })
            .then((res) => {
                return res.json()
                    .then((json) => {
                        return json;
                    })
            })
            .catch(err => {
                console.log("api post error:", err);
                throw err;
            });
    },
    delete: (url, data, basicAuth) => {
        return fetch(apiUrl + url, {
                method: "DELETE",
                "authorization": basicAuth === "basicAuth" ? "nearBy:nearBy" : "Bearer " + token
                    // "authorization": btoa("nearBy:nearBy")
            })
            .then((res) => {
                return res.json()
                    .then((json) => {
                        return json;
                    })
            })
            .catch(err => {
                console.log("api post error:", err);
                throw err;
            });
    }
}