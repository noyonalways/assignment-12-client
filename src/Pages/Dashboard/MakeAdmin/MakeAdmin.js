import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../Api/AxiosPrivate';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import NoData from '../../../Components/NoData/NoData';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import auth from '../../../Firebase/Firebase.init';
import UserRow from './UserRow/UserRow';

const MakeAdmin = () => {
    const navigate = useNavigate();
    const { data: result, isLoading, refetch } = useQuery('users', async () => {
        try {
            return await axiosPrivate.get('https://glacial-temple-86041.herokuapp.com/user');
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                signOut(auth);
                navigate('/login');
            }
        }
    });
    const users = result?.data;

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='p-5'>
            <PageTitle title={'Make Admin'} />
            {

                isLoading ? <div className="h-screen flex items-center justify-center"><LoadingRipple /> </div> : <div className="overflow-x-auto lg:w-[92%] mx-auto shadow-md">
                    {
                        users?.length ? <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>User Info</th>
                                    <th>User Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((user, index) => <UserRow refetch={refetch} index={index} user={user} key={user._id} />)
                                }
                            </tbody>
                        </table> : <div className='h-[90vh] flex items-center justify-center'><NoData /></div>
                    }
                </div>

            }
        </div>
    );
};

export default MakeAdmin;