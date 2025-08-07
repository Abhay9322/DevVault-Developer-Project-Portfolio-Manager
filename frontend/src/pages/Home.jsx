import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { useEffect } from 'react'

const Home = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/projects')
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">My Projects</h1>
                <Link to="/create" className='bg-blue-500 text-white px-4 py-2 rounded'>Add New</Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
                {projects.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>

        </div>
    )
}

export default Home
