import Button from '@mui/material/Button';
import { scroller } from 'react-scroll';

import { NAV_ITEMS } from '../../Static/Constants/nav';

import './Navigation.css';

const Navigation = ({ isPageAtTop }) => {
    return (
        <div className={!isPageAtTop ? 'navigation scrolled' : 'navigation'}>
            <div className='title' onClick={() => scroller.scrollTo('landing')}>_dk</div>
            <div>
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
        </div>
    )
}

export default Navigation;
