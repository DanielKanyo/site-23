import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { SOCIAL } from '../../Static/Constants/social';

import './Landing.css';

const Landing = () => {
    return (
        <div className='landing'>
            <div className='name-and-role-container'>
                <div className='name'>
                    danielkanyo
                </div>
                <div className='role'>
                    FULL STACK_UX
                </div>
            </div>
            <div className='language-selector-container'>
                <Button variant='text'>ENG</Button>
                <Button variant='text'>HUN</Button>
            </div>
            <div className='social-and-title-container'>
                <div className='title'>
                    _dk
                </div>
                <div className='social'>
                    {
                        SOCIAL.map((s) => {
                            return (
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
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Landing;