import React from 'react'
const ProjectCard = ({id, image, title, tool}) => {
    return (
        <div >
            <div className="project-banner-image">
                <img src={image} alt={title} className='project-banner-image' />
            </div>
            <div className='project-detail'>
                <span class="project-category">{tool}</span>
                <h2 className='project-title'>{title}</h2>
                <p className='project-description'>I focus on crafting smooth, responsive interfaces that balance
                    aesthetic appeal with practical functionality.</p>
                <button className='project-btn'>View</button>
            </div>
        </div>
    )
}

export default ProjectCard