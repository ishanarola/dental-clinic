const apiUrl = "http://localhost:3000/";
// const apiUrl = "https://todonode-d031a.web.app/";
export default {
	get: (url) => {
		return fetch(apiUrl + url, {
			method: "GET",
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
	post: (url, data) => {
		return fetch(apiUrl + url, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				"authorization":"nearBy:nearBy"
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
	patch: (url, data) => {
		return fetch(apiUrl + url, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
				"authorization":"nearBy:nearBy"
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
	put: (url, data) => {
		return fetch(apiUrl + url, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
				"authorization":"nearBy:nearBy"
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
	delete: (url, data) => {
		return fetch(apiUrl + url, {
			method: "DELETE",
			"authorization":btoa("nearBy:nearBy")
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