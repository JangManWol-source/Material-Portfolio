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
            <div className="details"><div><img src={graduate} alt="graduate" /></div><div>I am an ICCT Computer Science student.</div></div>
            <div className="details"><div><img src={award} alt="award" /></div><div>At MaNHS, I graduated with honors.</div></div>
            <div className="details"><div><img src={code} alt="code" /></div><div>I am the developer of our thesis android app.</div></div>
            <div className="details"><div><img src={work} alt="work" /></div><div>Gaining experience by working part-time and freelancing on Linkedin and other platforms.</div></div>
            <div className="details"><div><img src={react} alt="react" /></div><div>I really like the React.js library.</div></div>
            <div className='title' style={{textAlign:'left', marginTop:10}}>Recent Research</div>
            <div className='study'><img src={study} alt="" /></div>
        </Card>
    </div>
  )
}

export default OverView