import {createAuthProvider} from 'react-token-auth';


export const [useAuth, authFetch, login, logout] =
    createAuthProvider<{ accessToken: string, refreshToken: string }>({
        accessTokenKey: 'accessToken',
        onUpdateToken: (data) => fetch('http://localhost:5000/admins/refreshtoken', {
            method: 'POST',
            body: data.refreshToken
        })
        .then(r => r.json())
    });