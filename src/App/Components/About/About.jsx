import { Parallax } from 'react-scroll-parallax';

import './About.css';

const About = () => {
    return (
        <div className='about' name='about'>
            <Parallax speed={-10}>
                <div className='profile-img'></div>
            </Parallax>
            <Parallax speed={10}>
                <div className='about-text'>
                    With experience in web development and design,
                    I maintain a healthy balance between functionality and visual impact in all my work.
                    <br />
                    <br />
                    I believe every piece of design can be a work of art.
                </div>
            </Parallax>
        </div>
    )
}

export default About;
