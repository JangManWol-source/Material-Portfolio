import React from 'react'
import Card from '../../UI/Card/Card'
import classes from './SkillsItem.module.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SkillsItem = (props) => {
  const [selected, setSelected] = useState('all')
  const [ref, inView] = useInView({
    threshold: 0.2
  })
const filteredSkills = props.items.filter((each) => {
  return each.type === selected
})
const onAllSelect = () => {
  setSelected('all')
  return
}
const onWebSelect = () => {
setSelected('web')
return
}
const onGraphicsSelect = () => {
setSelected('graphics')
return
}
const onDBSelect = () => {
setSelected('database')
return
}
const onAndroidSelect = () => {
setSelected('android')
return
}
  return (
    <div className={classes.skills_item}>
      <div className={classes.skills_title}>SKILLS</div>
      <div className={classes.skills_holder}>
      <div className={classes.skills_nav}>
            <motion.div whileHover={{scale:1.2, fontWeight:700}} onClick={onAllSelect}>ALL</motion.div>
            <motion.div whileHover={{scale:1.2, fontWeight:700}} onClick={onWebSelect}>WEB</motion.div>
            <motion.div whileHover={{scale:1.2, fontWeight:700}} onClick={onGraphicsSelect}>GRAPHICS</motion.div>
            <motion.div whileHover={{scale:1.2, fontWeight:700}} onClick={onDBSelect}>DATABASE</motion.div>
            <motion.div whileHover={{scale:1.2, fontWeight:700}} onClick={onAndroidSelect}>ANDROID</motion.div>
      </div>
      <div className={classes.skills_items} ref={ref}>
      {selected === 'all' && props.items.map((each) => 
            <Card className={classes.card} key={each.id}>
                <div>{each.title}</div>
                <div><img src={each.img} alt="" /></div>
                {inView && <div className={classes.percent}><CountUp start={0} end={each.value} duration={3}/>%</div>}
            </Card>
        )}
        {filteredSkills.map((each) => 
            <Card className={classes.card} key={each.id}>
                <div>{each.title}</div>
                <div><img src={each.img} alt="" /></div>
                {inView && <div className={classes.percent}><CountUp start={0} end={each.value} duration={3}/>%</div>}
            </Card>
        )}
      </div>
      </div>
    </div>
  )
}

export default SkillsItem