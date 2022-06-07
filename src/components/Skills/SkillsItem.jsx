import React from 'react'
import Card from '../../UI/Card/Card'
import classes from './SkillsItem.module.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SkillsItem = (props) => {
  const [ref, inView] = useInView({
    threshold: 0.2
  })
  return (
    <div className={classes.skills_item}>
      <div className={classes.skills_title}>SKILLS</div>
      <div className={classes.skills_holder}>
      <div className={classes.skills_nav}>
            <div>ALL</div>
            <div>WEB</div>
            <div>GRAPHICS</div>
            <div>DATABASE</div>
            <div>ANDROID</div>
      </div>
      <div className={classes.skills_items} ref={ref}>
        {props.items.map((each) => 
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