import React from 'react'
import classes from './Nav.module.css'
import Logo from '../Logo/Logo.jsx'
import Button from '@mui/material/Button';
import {Link} from 'react-scroll'
import git from '../res/drawable/git_dark.svg'
import {motion} from 'framer-motion'
const Nav = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <Logo />

        <h3>Joe Cristian Jamis</h3>
      </div>
      <div className={classes.item}>
        <div className={classes.line_wrapper}>
          <motion.div whileHover={{scale:1.3}}>
            <Link to='home' spy={true} smooth={true} offset={0} duration={1000}>Home</Link>
          </motion.div>
        </div>
        <div className={classes.line_wrapper}>
          <motion.div whileHover={{scale:1.3}}>
            <Link to='skill' spy={true} smooth={true} offset={0} duration={1000}>Skills</Link>
          </motion.div>
        </div>
        <div className={classes.line_wrapper}>
          <motion.div whileHover={{scale:1.3}}>
            <Link to='contact' spy={true} smooth={true} offset={50} duration={1000}>Contacts</Link>
          </motion.div>
        </div>
      </div>
      <div className={classes.button}>
        <a href='https://github.com/JangManWol-source'> <Button variant='contained'>Visit Me <img src={git}  alt="" /></Button></a>
      </div>

    </div>
  )
}

export default Nav