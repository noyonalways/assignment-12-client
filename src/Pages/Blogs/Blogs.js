import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Footer from '../../Shared/Footer/Footer';
import SingleQuestion from './SingleQuestion/SingleQuestion';
import Image from '../../Assets/Image/question.svg';
import LoadingRipple from '../../Components/LoadingRipple/LoadingRipple';

const Blogs = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true)
            const { data } = await axios.get('https://glacial-temple-86041.herokuapp.com/question');
            setQuestions(data.data);
            setLoading(false);
        })();
    }, []);
    
    return (
        <section >
            <PageTitle title={'Blogs'} />
            {
                loading ? <div className="h-screen flex items-center"><LoadingRipple /></div> : <div className="container mx-auto py-10 px-3 lg:px-0">
                    <div className="flex justify-between flex-wrap">
                        <div className='basis-full lg:basis-[40%]'>
                            <img className='w-full' src={Image} alt="" />
                        </div>
                        <div className='space-y-3 basis-full lg:basis-[55%]'>
                            {
                                questions.map(item => <SingleQuestion item={item} />)
                            }
                        </div>
                    </div>
                </div>
            }
            <Footer />
        </section>
    );
};

export default Blogs;