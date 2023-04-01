import cookie from 'js-cookie';


export const Cookie = {
    setCookie: (key, value, expires) => {
        cookie.set(key, value, { expires })
    },
    getCookie: (key) => {
        return cookie.get(key)
    },
    removeCookie: (key) => {
        cookie.remove(key)
    }
}