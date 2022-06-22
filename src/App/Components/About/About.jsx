import { Parallax } from 'react-scroll-parallax';

import './About.css';

const About = ({ isMobile }) => {
    return (
        <div className='about' name='about'>
            <Parallax translateY={[-20, 20]} disabled={isMobile}>
                <div className='profile-img'></div>
            </Parallax>
            <Parallax translateY={[20, -20]} disabled={isMobile}>
                <div className='about-text-container'>
                    <div>
                        With experience in web development and design,
                        I maintain a healthy balance between functionality and visual impact in all my work.
                    </div>
                    <div>
                        I believe every piece of design can be a work of art.
                    </div>
                </div>
            </Parallax>
        </div>
    )
}

export default About;
