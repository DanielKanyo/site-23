import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { scroller } from 'react-scroll';

import { NAV_ITEMS } from '../../Static/Constants/nav';

import './Navigation.css';

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='title' onClick={() => scroller.scrollTo('landing')}>_dk</div>
            <div className='nav-items'>
                {
                    NAV_ITEMS.map((element) =>
                        <Button
                            variant='text'
                            key={element}
                            onClick={() => scroller.scrollTo(element)}
                        >
                            {element}
                        </Button>
                    )
                }
            </div>
            <div className='menu-icon-container'>
                <IconButton aria-label='menu'>
                    <MenuIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Navigation;
