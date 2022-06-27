import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CloseIcon from '@mui/icons-material/Close';
import { scroller } from 'react-scroll';

import { NAV_ITEMS } from '../../Static/Constants/nav';

import './Navigation.css';

const Navigation = () => {
    const [drawerOpened, setDrawerOpened] = useState(false);

    const handleNavItemClickedInDrawer = (element) => {
        scroller.scrollTo(element);
        setDrawerOpened(false);
    }

    const items = () => (
        NAV_ITEMS.map((element) =>
            <Button
                variant='text'
                key={element}
                onClick={() => handleNavItemClickedInDrawer(element)}
            >
                {element}
            </Button>
        )
    );

    return (
        <div className='navigation'>
            <div className='title' onClick={() => scroller.scrollTo('landing')}>_dk</div>
            <div className='nav-items'>
                {items()}
            </div>
            <div className='menu-icon-container'>
                <IconButton aria-label='menu' onClick={() => setDrawerOpened(true)}>
                    <MenuIcon />
                </IconButton>
            </div>
            <SwipeableDrawer
                anchor='bottom'
                sx={{
                    '& .MuiDrawer-paper': {
                        background: 'transparent',
                    },
                }}
                open={drawerOpened}
                onClose={() => setDrawerOpened(false)}
                onOpen={() => setDrawerOpened(true)}
            >
                <div className='drawer-content'>
                    <div className='rect'></div>
                    <div className='close-icon-container'>
                        <IconButton aria-label='top' className='arrow-icon' onClick={() => scroller.scrollTo('landing')}>
                            <ArrowUpwardIcon fontSize='inherit' />
                        </IconButton>
                        <IconButton aria-label='close' size='large' onClick={() => setDrawerOpened(false)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className='nav-items-in-drawer'>
                        {items()}
                    </div>
                </div>
            </SwipeableDrawer>
        </div>
    )
}

export default Navigation;
