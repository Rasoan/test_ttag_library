export const get = (key: any) => {
    const cookie = document.cookie.split(';')
        .map((c) => c.split('='))
        .find(([cookieName]) => cookieName.trim() === key)
    return cookie && cookie[1];
}

export const set = (key: any, value: any) => {
    document.cookie = `${key}=${value}`;
}