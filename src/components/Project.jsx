import React from 'react'
import ProjectCard from './ProjectCard';
import Counter from '../assets/COUNTER.jpg';
import Todo from '../assets/TODO.jpg';
const project = [
    {'id': 0, 'image': Counter, 'tool': 'HTML,CSS,JS', 'title': 'COUNTER'},
    {'id': 1, 'image': Todo, 'tool': 'React', 'title': 'TODO'}
]

const Project = () => {
    return (
        <>
            <div className='project-bg-container container'>
                <h1>Project</h1>
                <div className="row g-4">
                    {project.map((item) => (
                        <div key={item.id} className=" col-12 col-md-6 col-lg-6 project-bg-card">
                            <ProjectCard {...item} />
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}

export default Project