import Project from '../models/projectModel.js';

export const getProjects = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
};

export const createProject = async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.json(newProject);
};

export const updateProject = async (req, res) => {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

export const deleteProject = async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
};