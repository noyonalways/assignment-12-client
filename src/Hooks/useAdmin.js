
import { useEffect, useState } from 'react';
import axiosPrivate from '../Api/AxiosPrivate';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        (async () => {
            if (email) {
                const { data } = await axiosPrivate.get(`/admin/${email}`);
                setAdmin(data.isAdmin)
                setAdminLoading(false);
            }
        })();
    }, [user])

    return [admin, adminLoading]
};

export default useAdmin;