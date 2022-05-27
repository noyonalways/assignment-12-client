import {useEffect, useState} from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = {email};
        console.log(email, currentUser);
        
    },[user]);

    return(token);
};

export default useToken;