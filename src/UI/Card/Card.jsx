import React from 'react'
import classes from './Card.module.css'
import { motion } from 'framer-motion'

const Card = (props) => {

  
  return (
    <motion.div className={`${classes.card} ${props.className}`} initial={{y:100, opacity:0}} transition={{duration:1}} whileInView={{y:0, opacity: 1}}>{props.children}</motion.div>
  )
}

export default Card