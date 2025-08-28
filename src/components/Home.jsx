import React from 'react'
import image from '../assets/images.png';
const Home = () => {
    return (
        <>
            <div>
                <div className="row container">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-lg-2">
                        <img src={image} alt="Image" className='profile-image' />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-lg-1">
                        <h1 className='profile-name'>Hello I'm <br /> Dinesh Kumaar</h1>
                        <p className='profile-desc'>
                            I'm a Freelance UI/UX Designer and Developer based in London, England.
                            I strives to build immersive and beautiful web applications through carefully
                            crafted code and user-centric design.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home