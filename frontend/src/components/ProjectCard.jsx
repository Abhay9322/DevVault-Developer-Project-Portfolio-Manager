import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <div className="p-4 border rounded shadow">
            <img src={project.image} alt={project.title} className='w-full h-48 object-cover' />
            <h2 className='text-xl font-bold mt-2'>{project.title}</h2>
            <p className='text-sm'>{project.description}</p>
            <div className='flex gap-2 mt-2 flex-wrap'>
                {project.techStack.map((tech, index) => (
                    <span key={index} className='text-xs bg-gray-200 px-2 py-1 rounded'>{tech}</span>
                ))}
            </div>
            <div className='mt-3'>
                <a href={project.github} className='text-blue-500 mr-3'>GitHub</a>
                <a href={project.live} className='text-green-500'>Live</a>

            </div>

        </div>
    )
}

export default ProjectCard
