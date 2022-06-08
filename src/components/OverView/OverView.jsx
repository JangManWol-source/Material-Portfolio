import { Card } from '@mui/material'
import React from 'react'
import './Overview.css'
import react from '../res/drawable/react-brands.svg'
import work from '../res/drawable/briefcase-solid.svg'
import code from '../res/drawable/code-solid.svg'
import award from '../res/drawable/award-solid.svg'
import graduate from '../res/drawable/graduation-cap-solid.svg'
import study from '../res/drawable/study.png'
const OverView = () => {
  return (
    <div className='overview'>
        <Card className='overview-card'>
            <div className="title">Quick Overview</div>
            <div className="details"><div><img src={graduate} alt="graduate" /></div><div>I am Computer Science Student at ICCT</div></div>
            <div className="details"><div><img src={award} alt="" /></div><div>I finished senior high school with honor at MaNHS.</div></div>
            <div className="details"><div><img src={code} alt="" /></div><div>I am the developer of our thesis app.</div></div>
            <div className="details"><div><img src={work} alt="" /></div><div>Having part time job and free lancing at Linkedin and another platform to gain experience.</div></div>
            <div className="details"><div><img src={react} alt="" /></div><div>I love React.js library.</div></div>
            <div className='title' style={{textAlign:'left', marginTop:10}}>Recent Study</div>
            <div className='study'><img src={study} alt="" /></div>
        </Card>
    </div>
  )
}

export default OverView