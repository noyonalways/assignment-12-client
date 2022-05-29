import React from 'react';
import { BsLink45Deg } from 'react-icons/bs'

const ProjectCard = ({ project }) => {
    const { projectName, projectImg, projectLink } = project
    return (
        <div>
            <div data-aos="zoom-in-up" data-aos-duration="1500">
                <div className='border-2 border-secondary relative rounded single-project bg-gray-50 p-[5px]' >
                    <img src={projectImg} alt="" />
                    <div className="single-project-ovarly absolute duration-300 flex items-center justify-center w-full top-0 left-0 bg-secondary opacity-0 h-full">
                        <a href={projectLink} rel="noreferrer" target='_blank'><BsLink45Deg className='text-5xl text-white' /></a>
                    </div>
                </div>
                <h3 className="text-lg font-semibold">{projectName}</h3>
            </div>
        </div>
    );
};

export default ProjectCard;