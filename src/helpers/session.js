export const getToken= () => {
    return localStorage.getItem("token") ;
}

export const setToken = (token) => {
    localStorage.setItem("token", token);
}

export const removeToken = () => {
    localStorage.removeItem("token");
}

export const isAuth = () => {
    return getToken() !== null;
}

export const getUser = () => {

    const user =  JSON.parse(localStorage.getItem("user"));
    console.log({user})
    return user;
}
