import React from 'react'
import Card from '../../UI/Card/Card'
import classes from './SkillsItem.module.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

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
            <div onClick={onAllSelect}>ALL</div>
            <div onClick={onWebSelect}>WEB</div>
            <div onClick={onGraphicsSelect}>GRAPHICS</div>
            <div onClick={onDBSelect}>DATABASE</div>
            <div onClick={onAndroidSelect}>ANDROID</div>
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