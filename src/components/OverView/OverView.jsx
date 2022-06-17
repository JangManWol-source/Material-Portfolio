import { Card } from '@mui/material'
import React from 'react'
import './Overview.css'
import react from '../res/drawable/react-brands.svg'
import work from '../res/drawable/briefcase-solid.svg'
import code from '../res/drawable/code-solid.svg'
import award from '../res/drawable/award-solid.svg'
import graduate from '../res/drawable/graduation-cap-solid.svg'
import study from '../res/drawable/study.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
const OverView = () => {
  return (
    <motion.div animate={{y:0, opacity:1}} transition={{duration:1.5}} initial={{opacity:0, y:100}} className='overview'>
        <div>
        <Card  className='overview-card'>
            <div className="title"><Link to='overview' smooth={true} spy={true} offset={-32} duration={1000}>Quick Overview</Link></div>
            <div className="details"><div><img src={graduate} alt="graduate" /></div><div>I am an ICCT Computer Science student.</div></div>
            <div className="details"><div><img src={award} alt="award" /></div><div>At MaNHS, I graduated with honors.</div></div>
            <div className="details"><div><img src={code} alt="code" /></div><div>I am the developer of our thesis android app.</div></div>
            <div className="details"><div><img src={work} alt="work" /></div><div>Gaining experience by working part-time and freelancing on Linkedin and other platforms.</div></div>
            <div className="details"><div><img src={react} alt="react" /></div><div>I really like the React.js library.</div></div>
            <div className='title_a' style={{textAlign:'left'}}>Stacks</div>
            <div><ul>
              <li><strong>MERN Stack</strong></li>
              <ul>
                <li>Mongo Database</li>
                <li>Express</li>
                <li>React.js</li>
                <li>Node.js</li>
              </ul>
              <li><strong>Android Studio with Firebase</strong></li>
              <ul>
                <li>Kotlin</li>
                <li>Firebase Database</li>
                <li>Android Studio</li>
              </ul>
              </ul>
              </div>
            <div className='title_a' style={{textAlign:'left', marginTop:10}}>Recent Research</div>
            <div className='study'><img src={study} alt="" /></div>
           
        </Card>
        </div>
    </motion.div>
  )
}

export default OverView