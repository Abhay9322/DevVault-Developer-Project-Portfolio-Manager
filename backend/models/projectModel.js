import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    techStack: [String],
    github: String,
    live: String,
    image: String
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);