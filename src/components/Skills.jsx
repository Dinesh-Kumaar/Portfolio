import React from 'react';
import Java from '../assets/JAVA.jpg';
import HTML from '../assets/HTML.jpg';
import CSS from '../assets/CSS.jpg';
import JS from '../assets/JS.jpg';
import REACT from '../assets/REACT.jpg';
import BOOTSTRAP from '../assets/BOOTSTRAP.jpg';
const skillDetails = [
    { 'id': 0, 'image': Java, 'title': 'JAVA' },
    { 'id': 1, 'image': HTML, 'title': 'HTML' },
    { 'id': 2, 'image': CSS, 'title': 'CSS' },
    { 'id': 3, 'image': JS, 'title': 'JS' },
    { 'id': 4, 'image': REACT, 'title': 'REACT' },
    { 'id': 5, 'image': BOOTSTRAP, 'title': 'BOOTSTRAP' }
]
const Skills = () => {
    return (
        <>
            <div className="skill-bg-container">
                <h1>Skills</h1>
                <div className="row ">
                    {skillDetails.map((skills) => (
                        <li key={skills.id} className="col-6 col-md-4 list-unstyled">
                            <div className="col-12 skill-bg-card">
                                <img src={skills.image} alt={skills.title} className='skill-card-logo'  />
                                <h3 className='skill-card-title'>{skills.title}</h3>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills