export const login = payload => (dispatch, getState, Api) => {
    return Api.post("users/login", payload, "basicAuth").then(res => {
        return res;
    });
};

export const logout = () => (dispatch, getState, Api) => {
    return Api.put("users/logout").then(res => {
        return res;
    });
};