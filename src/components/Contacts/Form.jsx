import { Button, FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './Form.css'
import email from '../res/drawable/email_dark.svg'
import address from '../res/drawable/address_dark.svg'
import phone from '../res/drawable/phone_dark.svg'

const Form = () => {
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
    return (
        <div className='contacts' id='contact'>
           <div className='info'>
                {data.map((each)=>(
                    <div className='info-details'>
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
            <Box component="form" noValidate autoComplete="off" className='box'>
            <FormControl >
              <div className="form">
              <div className='form1'>
                    <TextField sx={{ width: '25ch' }}
                        id="outlined-multiline-flexible"
                        label="Username"
                        multiline
                        maxRows={10}
                    // value={value}
                    // onChange={handleChange}
                    />
                    <TextField sx={{ width: '25ch'}}
                        id="outlined-multiline-flexible"
                        label="Email"
                        multiline
                        maxRows={10}
                    // value={value}
                    // onChange={handleChange}
                    />
                </div>

                <div className='form2'>
                    <TextField sx={{ width: '25ch' }}
                        id="outlined-multiline-flexible"
                        label="Message"
                        multiline
                        rows={4}
                        maxRows={10}
                    // value={value}
                    // onChange={handleChange}
                    />
                    
              <div className='button'>
              <Button variant='contained' sx={{width:'25ch'}}>Submit</Button>
              </div>
                </div>
              </div>
            </FormControl>


            
        </Box>
        
        </div>
    )
}

export default Form
