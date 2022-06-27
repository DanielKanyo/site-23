import { Parallax } from 'react-scroll-parallax';
import { SKILLS } from '../../Static/Constants/skills';

import './Skills.css';

const Skills = ({ isMobile }) => {
    return (
        <div className='skills'>
            <div className='title'>Skills</div>
            <div className='content'>
                {
                    SKILLS.map((stack) => (
                        <Parallax translateX={stack.translateX} key={stack.stack} className='parallax' disabled={isMobile}>
                            <div className={`skill-category-container ${stack.rightAligned ? 'right-align' : ''}`}>
                                <div className='skill-category-title'>
                                    {stack.stack}
                                </div>
                                <div className={`skill-category-list ${stack.rightAligned ? 'right-flex' : 'left-flex'}`}>
                                    {
                                        stack.skills.map((skill) => (
                                            <div className='skill-element' key={skill}>{skill}</div>
                                        ))
                                    }
                                </div>
                                <div className='and-more'>
                                    and more...
                                </div>
                            </div>
                        </Parallax>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills;
