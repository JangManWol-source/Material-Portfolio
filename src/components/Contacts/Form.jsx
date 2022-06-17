import { Alert, Button, FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import './Form.css'
import email from '../res/drawable/email_dark.svg'
import address from '../res/drawable/address_dark.svg'
import phone from '../res/drawable/phone_dark.svg'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Form = () => {
    const [error, setError] = useState()
    const [userName, setUsername] = useState('')
    const [emailForm, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [alertMessage, setAlertMessage] = useState({})
    const data = [{
        title: 'jamisjoecristian@gmail.com',
        img: email,
        details: 'Sent mail to'
    },
    {
        title: '079 Lanzones Street',
        img: address,
        details: 'Payatas NCR 119'
    },
    {
        title: '09914219787 - Dito',
        img: phone,
        details: 'Available anytime'
    },
    ]

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        if (userName.length === 0) {
            setAlertMessage({
                title: "Please include your username."
            })
            setError(true)
            return
        }
        if (emailForm.length === 0) {
            setAlertMessage({
                title: "Please include your email address"
            })

            setError(true)
            return
        }
        if (message.length === 0) {
            setAlertMessage({
                title: "Please set your message."
            })

            setError(true)
            return
        }

        emailjs.sendForm('service_u7r2g48', 'template_j3wsbhm', form.current, 'jORiEf6m2Ak_v7UKh')
            .then((result) => {
                console.log(result.text);
                setError(null)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    const userNameHandler = (event) => {
        setUsername(event.target.value)
    }
    const emailHandler = (event) => {
        setEmail(event.target.value)
    }
    const messageHandler = (event) => {
        setMessage(event.target.value)
    }
    const errorClick = () => {
        setError(null)
    }
    return (
        <div className='contacts' id='contact'>

            <div className='info'>
                {data.map((each) => (
                    <div className='info-details' key={each.title}>
                        <div className='img'><img src={each.img} alt="" /></div>
                        <div>
                            <div>
                                {each.title}
                            </div>
                            <div className='contact-details'>
                                {each.details}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Box onSubmit={sendEmail} component="form" noValidate autoComplete="off" ref={form} className='box'>
                <FormControl >
                    <div className="form">
                        <div className='form1'>
                            <TextField sx={{ width: '25ch' }}
                                id="outlined-multiline-flexible"
                                label="Username"
                                multiline
                                onChange={userNameHandler}
                                name='name'
                                required
                            // value={value}
                            // onChange={handleChange}
                            />
                            <TextField sx={{ width: '25ch' }}
                                id="outlined-multiline-flexible"
                                label="Email"
                                name='email'
                                onChange={emailHandler}
                                multiline
                                required
                            // value={value}
                            // onChange={handleChange}
                            />
                        </div>

                        <div className='form2'>
                            <TextField sx={{ width: '25ch' }}
                                id="outlined-multiline-flexible"
                                label="Message"
                                multiline
                                onChange={messageHandler}
                                name='message'
                                rows={4}
                                required
                            // value={value}
                            // onChange={handleChange}
                            />

                            <div className='button'>
                                <Button variant='contained' type='submit' sx={{ width: '25ch' }}>Submit</Button>

                                <div className="error">

                                    {error && <Alert severity='error' onClick={errorClick}>{alertMessage.title}</Alert>}
                                </div>
                            </div>
                        </div>
                    </div>
                </FormControl>



            </Box>

        </div>
    )
}


export default Form
