import Button from '@mui/material/Button';
import { scroller } from 'react-scroll';

import { NAV_ITEMS } from '../../Static/Constants/nav';

import './Navigation.css';

const Navigation = () => {
    return (
        <div className='navigation'>
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
    )
}

export default Navigation;
