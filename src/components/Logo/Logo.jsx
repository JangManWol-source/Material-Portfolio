import React from 'react'
import classes from './Logo.module.css'
import logo from '../res/drawable/portfolio.png'
const Logo = () => {
    // const variants = {
    //     hidden:{
    //         opacity:0,
    //         x:'-100vw'
    //     },
    //     visible:{
    //         opacity:1,
    //         x:0,
    //         transition:{
    //             type: 'spring',
    //             duration: 1
    //         }
    //     },
    //     visible2:{
    //         opacity:1,
    //         x:0,
    //         transition:{
    //             type: 'spring',
    //             duration: 1.5
    //         }
    //     },
    //     visible3:{
    //         opacity:1,
    //         x:0,
    //         transition:{
    //             type: 'spring',
    //             duration: 2
    //         }
    //     },

    // }
    return (
        <div className={classes.logo}>
            <img src={logo} alt="" />
        </div>
    )
}

export default Logo