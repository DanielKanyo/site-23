import Button from '@mui/material/Button';

import './Navigation.css';

const Navigation = () => {
    return (
        <div className='navigation'>
            <Button variant='text'>About Me</Button>
            <Button variant='text'>Skills</Button>
            <Button variant='text'>Contact</Button>
        </div>
    )
}

export default Navigation;
