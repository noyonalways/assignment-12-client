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

const MyPortfolio = () => {
    const { data, isLoading } = useQuery('portfolio', async () => await axios.get('https://glacial-temple-86041.herokuapp.com/portfolio'));
    const portfolio = data?.data[0];
    const { name, profileImg, email, phone, age, presentAddress, permanentAddress, education, gpa, passingYear, instisutionName, projects, usedTechnologies } = data?.data[0] ? portfolio : {};

    return (
        <div>
            <PageTitle title={'MyProfile'} />
            <div className="container mx-auto py-6">
                {
                    isLoading ? <div className="flex items-center justify-center h-screen"><LoadingRipple /> </div> : <div className=' lg:w-[860px] mx-auto px-5 py-6'>
                        <div className='flex space-x-12 items-center border-b pb-3'>
                            <img className='w-28 h-28 rounded-full ring-secondary ring' src={profileImg} alt="" />
                            <ul className='flex space-x-3 text-lg'>
                                <li><a className='hover:text-[#4267B2] duration-200' rel="noreferrer" href="https://facebook.com/codernoyon" target='_blank'><BsFacebook /></a></li>
                                <li><a className='hover:text-[#00acee] duration-200' rel="noreferrer" href="https://twitter.com/codernoyon" target='_blank'><BsTwitter /></a></li>
                                <li><a className='hover:text-[#bc2a8d] duration-200' rel="noreferrer" href="https://instagram.com/codernoyon" target='_blank'><BsInstagram /></a></li>
                                <li><a className='hover:text-[#0072b1] duration-200' rel="noreferrer" href="https://linkedin.com/in/codernoyon/" target='_blank'><BsLinkedin /></a></li>
                            </ul>
                        </div>
                        <div className='grid md:grid-cols-2'>
                            <div className='py-3'>
                                <h3 className="text-lg font-semibold">Name</h3>
                                <p>{name}</p>
                            </div>
                            <div className='py-3'>
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p>{email}</p>
                            </div>
                            <div className='py-3'>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p>{phone}</p>
                            </div>
                            <div className='py-3'>
                                <h3 className="text-lg font-semibold">Age</h3>
                                <p>{age}</p>
                            </div>
                            <div className='py-3'>
                                <h3 className="text-lg font-semibold">Present Address</h3>
                                <p>{presentAddress}</p>
                            </div>
                            <div className='py-3'>
                                <h3 className="text-lg font-semibold">Permanent Address</h3>
                                <p>{permanentAddress}</p>
                            </div>
                            <div className='py-3'>
                                <h3 className="text-lg font-semibold">Education</h3>
                                {
                                    education?.map((e, index) => <p key={index} >{e}</p>)
                                }
                            </div>
                            <div className='py-3'>
                                <h3 className="text-lg font-semibold">GPA</h3>
                                {
                                    gpa?.map((g, index) => <p key={index} >{g}</p>)
                                }
                            </div>
                            <div className='py-3'>
                                <h3 className="text-lg font-semibold">Passing Year</h3>
                                {
                                    passingYear?.map((y, index) => <p key={index}>{y}</p>)
                                }
                            </div>
                            <div className='py-3'>
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
                                    usedTechnologies?.map((tech, index) => <img key={index} className='w-full h-[2.3rem] object-fill inline-block' src={tech?.technologyImg} alt="" />)
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
                    </div>
                }
            </div>
        </div>
    );
};

export default MyPortfolio;