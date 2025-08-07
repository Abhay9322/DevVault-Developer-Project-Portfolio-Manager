import React, { useState } from 'react';

const CreateProject = () => {
    const [form, setForm] = useState({ title: '', description: '', techStack: '', github: '', live: '', image: '' });
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const techs = form.techStack.split(',').map(t => t.trim());
        await axios.post('http://localhost:5000/api/projects', { ...form, techStack: techs });
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className='p-6 max-w-xl mx-auto space-y-4'>
            <input name='title' placeholder='Project Title' onChange={handleChange} className='border p-2 w-full' />
            <textarea name="description" placeholder='Description' onChange={handleChange} className='border p-2 w-full' />
            <input name='techStack' placeholder='Tech Stack' onChange={handleChange} className='border p-2 w-full' />
            <input name='github' placeholder='GitHub Link' onChange={handleChange} className='border p-2 w-full' />
            <input name='live' placeholder='Live Link' onChange={handleChange} className='border p-2 w-full' />
            <input name='image' placeholder='Image URL' onChange={handleChange} className='border p-2 w-full' />
            <button className='bg-green-600 text-white px-4 py-2 rounded'>Create Project</button>
        </form>
    )
}

export default CreateProject
