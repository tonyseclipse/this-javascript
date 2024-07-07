const value = ( 5 < 7 ) ? "True" : "False" ;
const merge = [...new Set(a.concat(b))];
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));