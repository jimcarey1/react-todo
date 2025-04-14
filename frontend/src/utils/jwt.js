import {jwtDecode} from 'jwt-decode';

export const checkTokenExpiry = () => {
    const authData = localStorage.getItem('jwt');
    if (!authData) return false;

    try {
        const accessToken = JSON.parse(authData).access;
        const { exp } = jwtDecode(accessToken);
        return exp < Date.now() / 1000; 
    } catch (err) {
        console.error("Token decoding failed", err);
        return true; 
    }
};


export default checkTokenExpiry;