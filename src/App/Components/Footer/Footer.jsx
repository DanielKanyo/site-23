import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { scroller } from 'react-scroll';
import { SOCIAL } from '../../Static/Constants/social';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
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
            <div className='copyright-txt'>
                Copyright © {new Date().getFullYear()}
            </div>
            <div>
                <IconButton
                    aria-label='share'
                    className='share-icon'
                    href='https://www.facebook.com/sharer/sharer.php?u=https%3A//danielkanyo.hu/'
                    target='_blank'
                >
                    <ShareIcon fontSize='inherit' />
                </IconButton>
                <IconButton aria-label='top' className='arrow-icon' onClick={() => scroller.scrollTo('landing')}>
                    <ArrowUpwardIcon fontSize='inherit' />
                </IconButton>
            </div>
        </div>
    )
}

export default Footer;