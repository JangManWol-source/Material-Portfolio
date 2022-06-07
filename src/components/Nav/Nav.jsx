import React from 'react'
import classes from './Nav.module.css'
import Logo from '../Logo/Logo.jsx'
import Button from '@mui/material/Button';
const Nav = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <Logo />

        <h3>Joe Cristian Jamis</h3>
      </div>
      <div className={classes.item}>
        <div className={classes.line_wrapper}>
          <div>
            <h5>Home</h5>
          </div>
          <div className={classes.line}></div>
        </div>
        <div className={classes.line_wrapper}>
          <div>
            <h5>Project</h5>
          </div>
          <div className={classes.line}></div>
        </div>
        <div className={classes.line_wrapper}>
          <div>
            <h5>Contacts</h5>
          </div>
          <div className={classes.line}></div>
        </div>
      </div>
      <div className={classes.button}>

        <Button variant='contained'>Visit Me</Button>
      </div>

    </div>
  )
}

export default Nav