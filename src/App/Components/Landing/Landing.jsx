import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import { scroller } from 'react-scroll';
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
            <div className='social-container'>
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
            <div className='welcome-msg'>
                <div className='welcome-title'>Welcome Visitor!</div>
                <div className='welcome-text'>
                    I hope you enjoy your time here. If you have any questions please click on the button below.
                </div>
                <div className='welcome-btn'>
                    <Button variant='outlined' onClick={() => scroller.scrollTo('contact')}>Contact me</Button>
                </div>
            </div>
            <div className='scroll'>
                <div className='text'>Scroll</div>
                <div className='line'></div>
            </div>
            <div className='share-link-container'>
                <div>
                    Share this site <br /> with your friends <br /> on Facebook...
                </div>
                <div>
                    <IconButton
                        aria-label='share'
                        size='large'
                        className='share-icon'
                        href='https://www.facebook.com/sharer/sharer.php?u=https%3A//danielkanyo.hu/'
                        target='_blank'
                    >
                        <ShareIcon fontSize='inherit' />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Landing;
