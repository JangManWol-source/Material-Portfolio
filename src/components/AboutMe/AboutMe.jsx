import React from 'react'
import classes from './AboutMe.module.css'
import Nav from '../Nav/Nav';
import fb from '../res/drawable/facebook-dark.svg'
import tel from '../res/drawable/telegram-dark.svg'
import git from '../res/drawable/git_dark.svg'
import { Button } from '@mui/material';
const AboutMe = () => {

    return (
        <div className={classes.nav}>
            <Nav />
            <div className={classes.nav_content}>
                <div className={classes.details}>
                    
                    <div className={classes.hello}>Hello there,</div>
                    <div className={classes.name}>I'm Joe Cristian</div>
                    <div className={classes.message}>an anspiring <strong>full-stack developer.</strong></div>
                    <div className={classes.button}>
                        <Button variant='contained' size='small'>View my projects</Button>
                    </div>
                    <div className={classes.logos}>
                        <div>
                            <img src={git} alt="" />
                        </div>
                        <div>
                            <img src={tel} alt="" />
                        </div>
                        <div>
                            <img src={fb} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
        
          
        </div>
    )
}

export default AboutMe