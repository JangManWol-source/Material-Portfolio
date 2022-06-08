import React from 'react'
import classes from './Skills.module.css'
import SkillsItem from './SkillsItem'
import html from '../res/drawable/html.png'
import js from '../res/drawable/js.png'
import react from '../res/drawable/react.png'
import css from '../res/drawable/css.png'
import xd from '../res/drawable/xd.png'
import ps from '../res/drawable/ps.png'
import figma from '../res/drawable/figma.png'
import ai from '../res/drawable/ai.png'
import aStudio from '../res/drawable/as.png'
import fr from '../res/drawable/firebase.png'
import kt from '../res/drawable/kotlin.png'
import { motion } from "framer-motion"
import java from '../res/drawable/java.png'
const Skills = (props) => {
  
    const web = ([{
        id: Math.random().toString(),
        title: 'React.JS',
        value: 75,
        img: react,
        type: 'web'
    },
    {
        id: Math.random().toString(),
        title: 'JavaScript',
        value: 75,
        img: js,
        type: 'web'
    },
    {
        id: Math.random().toString(),
        title: 'HTML',
        value: 80,
        img: html,
        type: 'web'
    },
    {
        id: Math.random().toString(),
        title: 'CSS',
        value: 75,
        img: css,
        type: 'web'
    }, {
        id: Math.random().toString(),
        title: 'Android Studio',
        value: 85,
        img: aStudio,
        type: 'android'
    },
    {
        id: Math.random().toString(),
        title: 'Firebase Database',
        value: 80,
        img: fr,
        type: 'android'
    },
    {
        id: Math.random().toString(),
        title: 'Kotlin',
        value: 80,
        img: kt,
        type: 'android'
    },
    {
        id: Math.random().toString(),
        title: 'Java',
        value: 75,
        img: java,
        type: 'android'
    }, {
        id: Math.random().toString(),
        title: 'Adobe Photoshop',
        value: 80,
        img: ps,
        type: 'graphics'
    },
    {
        id: Math.random().toString(),
        title: 'Adobe Illustrator',
        value: 80,
        img: ai,
        type: 'graphics'
    },
    {
        id: Math.random().toString(),
        title: 'Figma',
        value: 80,
        img: figma,
        type: 'graphics'
    },
    {
        id: Math.random().toString(),
        title: 'Adobe XD',
        value: 80,
        img: xd,
        type: 'graphics'
    },])

    return (
        <React.Fragment>
             <motion.div className={classes.skills}>
                <SkillsItem items={web} />
            </motion.div>
        </React.Fragment>
    )
}

export default Skills