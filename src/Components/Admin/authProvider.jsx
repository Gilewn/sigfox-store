const authProvider = {
    logout: () => {
        localStorage.removeItem('accessToken');
        return Promise.resolve();
    },
    
    checkAuth: () => localStorage.getItem('accessToken')
    ? Promise.resolve()
    : Promise.reject(),
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('accessToken');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: params => Promise.resolve(),
   






    login: ({ email, password }) =>  {
        const request = new Request('http://localhost:5000/admins/login', {
            method: 'POST',
            body: JSON.stringify({ username:email, password:password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ accessToken}) => {
                localStorage.setItem('accessToken', accessToken);
                
            });
    },
    // ...
};

export default authProvider;