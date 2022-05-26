import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const MyPortfolio = () => {
    return (
        <div>
            <PageTitle title={'MyProfile'} />
            <div className="container mx-auto py-6">
                <div className=' lg:w-[820px] mx-auto px-5 py-6'>
                    <div className='flex space-x-12 items-center border-b pb-3'>
                        <img className='w-28 h-28 rounded-full ring-secondary ring' src="https://i.ibb.co/djfb3zf/Photo-Room-20220403-005759.png" alt="" />
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
                            <p>Md Noyon Rahman</p>
                        </div>
                        <div className='py-3'>
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p>noyonrahman2003@gmail.com</p>
                        </div>
                        <div className='py-3'>
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <p>+8801706592962</p>
                        </div>
                        <div className='py-3'>
                            <h3 className="text-lg font-semibold">Age</h3>
                            <p>19</p>
                        </div>
                        <div className='py-3'>
                            <h3 className="text-lg font-semibold">Present Address</h3>
                            <p>Ranigonj, Kapasia, Gazipur</p>
                        </div>
                        <div className='py-3'>
                            <h3 className="text-lg font-semibold">Permanent Address</h3>
                            <p>Bahadurpur, Mirzapur, Gazipur</p>
                        </div>
                        <div className='py-3'>
                            <h3 className="text-lg font-semibold">Education</h3>
                            <p>HSC - 1st year</p>
                            <p>SSC- Pass</p>
                        </div>
                        <div className='py-3'>
                            <h3 className="text-lg font-semibold">GPA</h3>
                            <p>4.89 - SSC</p>
                        </div>
                        <div className='py-3'>
                            <h3 className="text-lg font-semibold">Passing Year</h3>
                            <p>SSC - 2021</p>
                        </div>
                        <div className='py-3'>
                            <h3 className="text-lg font-semibold">Institution Name</h3>
                            <p>Ranigonj High School - SSC</p>
                            <p>Taragonj H.N. Uchcha Madhyamic Bidyalaya - HSC</p>
                        </div>
                    </div>
                    <div className='my-3'>
                        <h3 className="text-2xl mb-3 font-semibold text-center bg-gray-50">Technologies that I know</h3>
                        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-stretch mt-3 gap-1 justify-center'>
                            <img className='w-full h-[2.3rem] object-fill inline-block' src="https://camo.githubusercontent.com/d63d473e728e20a286d22bb2226a7bf45a2b9ac6c72c59c0e61e9730bfe4168c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" alt="" />
                            <img className='w-full h-[2.3rem] object-fill inline-block' src="https://camo.githubusercontent.com/3a0f693cfa032ea4404e8e02d485599bd0d192282b921026e89d271aaa3d7565/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" alt="" />
                            <img className='w-full h-[2.3rem] object-fill inline-block' src="https://camo.githubusercontent.com/48f1dd9e9757ed7d131c81e5c5f3b27a08b599f3b26f4fcfd06c1b9615a14a0d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176617363726970742d4637444631452e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d7768697465" alt="" />
                            <img className='w-full h-[2.3rem] object-fill  inline-block' src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
                            <img className='w-full h-[2.3rem] object-fill inline-block' src="	https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="" />
                            <img className='w-full h-[2.3rem] object-fill inline-block' src="https://camo.githubusercontent.com/268ac512e333b69600eb9773a8f80b7a251f4d6149642a50a551d4798183d621/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642" alt="" />
                            <img className='w-full h-[2.3rem] object-fill inline-block' src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="" />
                            <img className='w-full h-[2.3rem] object-fill inline-block' src="https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465" alt="" />
                            <img className='w-full h-[2.3rem] object-fill inline-block' src="https://camo.githubusercontent.com/b13ed67c809178963ce9d538175b02649800772be1ce0cb02da5879e5614e236/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f426f6f7473747261702d3536334437433f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6f676f436f6c6f723d7768697465" alt="" />
                            <img className='w-full h-[2.3rem] object-fill inline-block' src="https://camo.githubusercontent.com/e9b080a6541e5355827ea91b6a0302cbbc54af4705b0c6b0f1561a0957ced2fb/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5461696c77696e645f4353532d3338423241433f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465" alt="" />
                            <img className='w-full h-[2.3rem] object-fill  inline-block' src="https://camo.githubusercontent.com/090aaafde637251d4f730803350cb52ec2f62d5e51173386c8424c0256c7239c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f66697265626173652d4646434132382e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6669726562617365266c6f676f436f6c6f723d7768697465" alt="" />
                            <img className='w-full h-[2.3rem] object-fill  inline-block' src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="" />
                            <img className='w-full h-[2.3rem] object-fill  inline-block' src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="" />
                            <img className='w-full h-[2.3rem] object-fill  inline-block' src="https://camo.githubusercontent.com/92dde1e7c42c013a5fce4dfeee0843f06710bfd38a610885e33a273c7eca0d22/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e65746c6966792d3030433742373f7374796c653d666f722d7468652d6261646765266c6f676f3d6e65746c696679266c6f676f436f6c6f723d7768697465" alt="" />
                            <img className='w-full h-[2.3rem] object-fill  inline-block' src="https://camo.githubusercontent.com/3bcc8da5c94cefdf2d976837d1be601f4d44d36b58d9590e36debe834a6e34de/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4865726f6b752d3433303039383f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465" alt="" />
                            <img className='w-full h-[2.3rem] object-fill  inline-block' src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="" />
                            <img className='w-full h-[2.3rem] object-fill  inline-block' src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white" alt="" />
                            <img className='w-full h-[2.3rem] object-fill  inline-block' src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="" />
                            <img className='w-full h-[2.3rem] object-fill  inline-block' src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;