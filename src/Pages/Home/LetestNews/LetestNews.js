import React from 'react';
import { Link } from 'react-router-dom';

const LetestNews = () => {
    return (
        <section className="pt-20 lg:pt-[120px] pb-10 px-5 lg:pb-20">
            <div className="container mx-auto">
                <div data-aos="fade-up"
                        data-aos-duration="500" className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full px-4">
                        <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                            <span className="font-semibold text-lg text-primary mb-2 block">
                                Our Blogs
                            </span>
                            <h2
                                className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                            >
                                Our Recent News
                            </h2>
                            <p className="text-base text-body-color">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                        data-aos-duration="1000" className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                                    alt=''
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <span
                                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                                >
                                    Dec 22, 2023
                                </span>
                                <h3>
                                    <Link to='/'
                                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                                    >
                                        Meet AutoManage, the best AI management tools
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                                    alt='img'
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <span
                                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                                >
                                    Mar 15, 2023
                                </span>
                                <h3>
                                    <Link to='/'

                                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                                    >
                                        How to earn more money as a wellness coach
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="max-w-[370px] mx-auto mb-10">
                            <div className="rounded overflow-hidden mb-8">
                                <img
                                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                                    alt='/iamge'
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <span
                                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                                >
                                    Jan 05, 2023
                                </span>
                                <h3>
                                    <Link to='/'
                                        className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                                    >
                                        The no-fuss guide to upselling and cross selling
                                    </Link>
                                </h3>
                                <p className="text-base text-body-color">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default LetestNews;