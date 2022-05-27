import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingRipple from '../../../Components/LoadingRipple/LoadingRipple';
import NoData from '../../../Components/NoData/NoData';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import UserRow from './UserRow/UserRow';


const MakeAdmin = () => {
    const { data, isLoading } = useQuery('users', async () => await axios.get('http://localhost:5000/user'));
    const users = data?.data;

    return (
        <div className='p-5'>
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
                                    users?.map((user, index) => <UserRow index={index} user={user} key={user._id} />)
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