import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { SOCIAL } from '../../Static/Constants/social';

import './Landing.css';

const Landing = () => {
    return (
        <div className='landing'>
            <div className='img'></div>
            <div className='name-and-role-container'>
                <div className='name'>
                    danielkanyo
                </div>
                <div className='role'>
                    FULL STACK | UX
                </div>
            </div>
            <div className='social-and-title-container'>
                <div className='title'>
                    _dk
                </div>
                <div className='social'>
                    {
                        SOCIAL.map((s) =>
                            <IconButton
                                aria-label={s.label}
                                size='large'
                                className='social-icon'
                                href={s.url}
                                target='_blank'
                                key={s.label}
                            >
                                {s.icon}
                            </IconButton>
                        )
                    }
                </div>
            </div>
            <div className='welcome-msg'>
                <div className='welcome-title'>Welcome Visitor!</div>
                <div className='welcome-text'>
                    I hope you enjoy your time here. If you have any questions please click on the button below.
                </div>
                <div className='welcome-btn'>
                    <Button variant='outlined'>Contact me</Button>
                </div>
            </div>
            <div className='scroll'>
                <div className='text'>Scroll</div>
                <div className='line'></div>
            </div>
        </div>
    );
}

export default Landing;
