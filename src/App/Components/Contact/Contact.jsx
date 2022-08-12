import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReCAPTCHA from 'react-google-recaptcha';
import { styled } from '@mui/material/styles';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

import './Contact.css';

const CustomTextField = styled(TextField)({
    '& label': {
        color: 'white',
        opacity: 0.7,
    },
    '& label.Mui-focused': {
        color: 'white',
        opacity: 0.7,
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'white',
        opacity: 0.7,
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):after': {
        borderBottomColor: 'white',
        opacity: 0.7,
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: 'white',
        opacity: 0.7,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
        opacity: 0.7,
    },
});

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [isBtnAvailable, setIsBtnAvailable] = useState(false);


    const onChange = (token) => {
        if (token) {
            setIsBtnAvailable(true);
        }
    }

    const resetFields = () => {
        setName('');
        setEmail('');
        setMsg('');
        setIsBtnAvailable(false);
    }

    const handleSendBtnClick = () => {
        try {
            addDoc(collection(db, 'contactMsg'), {
                name,
                email,
                msg,
                timestamp: new Date(),
            });
        } catch (e) {
            console.error('Error adding document: ', e);
        }

        resetFields();
    }

    return (
        <div className='contact'>
            <div className='title'>
                contact
            </div>
            <div className='content'>
                <CustomTextField
                    className='input'
                    label='name'
                    variant='standard'
                    placeholder='enter your name...'
                    InputProps={{
                        style: {
                            color: 'white'
                        }
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <CustomTextField
                    className='input'
                    label='e-mail'
                    variant='standard'
                    placeholder='enter your e-mail address...'
                    InputProps={{
                        style: {
                            color: 'white'
                        }
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <CustomTextField
                    className='input'
                    label='message'
                    multiline
                    rows={7}
                    variant='standard'
                    placeholder='share your thoughts with me...'
                    InputProps={{
                        style: {
                            color: 'white'
                        }
                    }}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />
                <ReCAPTCHA
                    className={name && email && msg ? 'reCAPTCHA' : 'reCAPTCHA invisible'}
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    onChange={onChange}
                />
                <div className='button-container'>
                    <Button
                        variant='contained'
                        disabled={!isBtnAvailable || !name || !email || !msg}
                        onClick={() => handleSendBtnClick()}
                    >Send</Button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
