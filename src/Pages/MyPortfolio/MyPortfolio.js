import PageTitle from '../../Components/PageTitle/PageTitle';
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import './MyPortfoli.css'
import axios from 'axios';
import ProjectCard from './ProjectCard/ProjectCard';
import LoadingRipple from '../../Components/LoadingRipple/LoadingRipple';
import { useQuery } from 'react-query';
import NoData from '../../Components/NoData/NoData';

const MyPortfolio = () => {
    const { data, isLoading } = useQuery('portfolio', async () => await axios.get('/portfolio'));
    const portfolio = data?.data[0];
    const { name, profileImg, email, phone, age, presentAddress, permanentAddress, education, gpa, passingYear, instisutionName, projects, usedTechnologies } = data?.data[0] ? portfolio : {};

    return (
        <div>
            <PageTitle title={'MyProfile'} />
            <div className="container mx-auto">
                {
                    isLoading ? <div className="flex items-center justify-center h-screen"><LoadingRipple /> </div> : portfolio ? <div className=' lg:w-[860px] mx-auto px-5 py-6'>
                    <div className='flex space-x-12 items-center border-b pb-3'>
                        <img data-aos="zoom-in" data-aos-duration="1000" className='w-28 h-28 rounded-full ring-secondary ring' src={profileImg} alt="" />
                        <ul className='flex space-x-3 text-lg'>
                            <li data-aos="fade-up"
                        data-aos-duration="500"><a className='hover:text-[#4267B2] duration-200' rel="noreferrer" href="https://facebook.com/codernoyon" target='_blank'><BsFacebook /></a></li>
                            <li data-aos="fade-up"
                        data-aos-duration="1000"><a className='hover:text-[#00acee] duration-200' rel="noreferrer" href="https://twitter.com/codernoyon" target='_blank'><BsTwitter /></a></li>
                            <li data-aos="fade-up"
                        data-aos-duration="1500"><a className='hover:text-[#bc2a8d] duration-200' rel="noreferrer" href="https://instagram.com/codernoyon" target='_blank'><BsInstagram /></a></li>
                            <li data-aos="fade-up"
                        data-aos-duration="2000"><a className='hover:text-[#0072b1] duration-200' rel="noreferrer" href="https://linkedin.com/in/codernoyon/" target='_blank'><BsLinkedin /></a></li>
                        </ul>
                    </div>
                    <div className='grid md:grid-cols-2'>
                        <div data-aos="fade-up"
                        data-aos-duration="500" className='py-3'>
                            <h3 className="text-lg font-semibold">Name</h3>
                            <p>{name}</p>
                        </div>
                        <div data-aos="fade-up"
                        data-aos-duration="1000" className='py-3'>
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p>{email}</p>
                        </div>
                        <div data-aos="fade-up"
                        data-aos-duration="1500" className='py-3'>
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <p>{phone}</p>
                        </div>
                        <div data-aos="fade-up"
                        data-aos-duration="2000" className='py-3'>
                            <h3 className="text-lg font-semibold">Age</h3>
                            <p>{age}</p>
                        </div>
                        <div data-aos="fade-up"
                        data-aos-duration="2500" className='py-3'>
                            <h3 className="text-lg font-semibold">Present Address</h3>
                            <p>{presentAddress}</p>
                        </div>
                        <div data-aos="fade-up"
                        data-aos-duration="3000" className='py-3'>
                            <h3 className="text-lg font-semibold">Permanent Address</h3>
                            <p>{permanentAddress}</p>
                        </div>
                        <div data-aos="fade-up"
                        data-aos-duration="3000" className='py-3'>
                            <h3 className="text-lg font-semibold">Education</h3>
                            {
                                education?.map((e, index) => <p key={index} >{e}</p>)
                            }
                        </div>
                        <div data-aos="fade-up"
                        data-aos-duration="3000" className='py-3'>
                            <h3 className="text-lg font-semibold">GPA</h3>
                            {
                                gpa?.map((g, index) => <p key={index} >{g}</p>)
                            }
                        </div>
                        <div data-aos="fade-up"
                        data-aos-duration="3000" className='py-3'>
                            <h3 className="text-lg font-semibold">Passing Year</h3>
                            {
                                passingYear?.map((y, index) => <p key={index}>{y}</p>)
                            }
                        </div>
                        <div data-aos="fade-up"
                        data-aos-duration="3000" className='py-3'>
                            <h3 className="text-lg font-semibold">Institution Name</h3>
                            {
                                instisutionName?.map((i, index) => <p key={index}>{i}</p>)
                            }
                        </div>
                    </div>
                    <div className='my-3'>
                        <h3 className="text-2xl mb-5 font-semibold text-center">Technologies that I know</h3>
                        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-stretch mt-3 gap-1 justify-center'>
                            {
                                usedTechnologies?.map((tech, index) => <a rel="noreferrer" target='_blank' key={index} href={tech.urlLink} ><img data-aos="fade-up"
                                data-aos-duration="1000"  className='hover:scale-[1.04] duration-200 w-full h-[2.3rem] object-fill inline-block' src={tech?.technologyImg} alt="" /></a>)
                            }
                        </div>
                    </div>
                    <div className='my-5'>
                        <h2 className="text-2xl font-semibold text-center mb-6">Letest Works</h2>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                            {
                                projects?.map((project, index) => <ProjectCard key={index} project={project} />)
                            }
                        </div>
                    </div>
                </div> : <div className='h-screen flex items-center justify-center'><NoData /></div>
                }
            </div>
        </div>
    );
};

export default MyPortfolio;