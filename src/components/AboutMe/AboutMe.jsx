import React from 'react'
import classes from './AboutMe.module.css'
import Nav from '../Nav/Nav';
import fb from '../res/drawable/facebook-dark.svg'
import tel from '../res/drawable/telegram-dark.svg'
import git from '../res/drawable/git_dark.svg'
import { Button } from '@mui/material';
import TypeAnimation from 'react-type-animation';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {Link} from 'react-scroll'
const AboutMe = () => {
    const [ref, inView] = useInView({
        threshold: 0.2
    })
    return (
        <div id='home' className={classes.nav}>
            <Nav />
            <div className={classes.nav_content} >
                <motion.div className={classes.details} initial={{ y: 100, opacity: 0 }} transition={{ duration: 1 }} whileInView={{threshold:0.5, y: 0, opacity: 1 }}>

                    <div className={classes.hello}>
                        Hello there,
                    </div>
                    <div className={classes.name}>I'm Joe Cristian</div>
                    <div className={classes.message} ref={ref}>
                        {inView && <TypeAnimation cursor={true}
                            sequence={['', Infinity, "an anspiring full-stack developer."]}
                            wrapper='div' />}
                    </div>
                    <div className={classes.button}>
                        <Button variant='contained' size='small'>
                            <Link to='holder' spy={true} offset={-40} smooth={true} duration={2000}>View my projects</Link>
                        </Button>
                    </div>
                    <div className={classes.logos}>
                        <div>
                            <a href="https://github.com/JangManWol-source"><img src={git} alt="" /></a>
                        </div>
                        <div>
                            <a href="tel:+639914219787"><img src={tel} alt="" /></a>
                        </div>
                        <div>
                            <a href="https://web.facebook.com/joetian.jamis.7/"><img src={fb} alt="" /></a>
                        </div>
                    </div>
                </motion.div>
            </div>


        </div>
    )
}

export default AboutMe