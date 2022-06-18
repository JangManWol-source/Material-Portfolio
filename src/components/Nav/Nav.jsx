import React, { useState } from "react";
import classes from "./Nav.module.css";
import Logo from "../Logo/Logo.jsx";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import git from "../res/drawable/git_dark.svg";
import prof from "../res/drawable/2x2.jpg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { motion } from "framer-motion";
const Nav = () => {
  const [click, setClick] = useState(false);
  return (
    <React.Fragment>
      <div className={classes.nav}>
        <div className={classes.logo}>
          <Logo />

          <h3>Joe Cristian Jamis</h3>
        </div>
        <div className={classes.item}>
          <div className={classes.line_wrapper}>
            <motion.div whileHover={{ scale: 1.3 }}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Home
              </Link>
            </motion.div>
          </div>
          <div className={classes.line_wrapper}>
            <motion.div whileHover={{ scale: 1.3 }}>
              <Link
                to="skill"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Skills
              </Link>
            </motion.div>
          </div>
          <div className={classes.line_wrapper}>
            <motion.div whileHover={{ scale: 1.3 }}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Contacts
              </Link>
            </motion.div>
          </div>
        </div>
        <div className={classes.nav_menu}>
          <MenuRoundedIcon
            onClick={() => {
              setClick(!click);
            }}
          />
        </div>
        <div className={classes.button}>
          <a href="https://github.com/JangManWol-source">
            {" "}
            <Button variant="contained">
              Visit Me <img src={git} alt="" />
            </Button>
          </a>
        </div>
      </div>
      {click && (
        <div
          className={classes.nav_drop}
          style={{ position: "absolute" }}
        >
        <motion.div onClick={()=>{
        setClick(false)
        }} initial={{opacity:0}} animate={{opacity:.8}} className={classes.back_drop}>
          backdrop
        </motion.div>
          <motion.div initial={{x:'100ch'}} transition={{stiffness:0}} animate={{x:0}} className={classes.nav_card}>
            <div className={classes.head}>
              <div>
                <img src={prof} alt="" />
              </div>
              <div style={{fontSize:10, paddingLeft:'1rem', paddingRight:'1rem'}}>
                Joe Cristian Jamis
              </div>
            </div>
            <div className={classes.nav_menus_select}>
            <Link
            onClick={()=>{setClick(false)}}
              className="card-item"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={2000}
            >
              Home
            </Link>
            <Link
            
            onClick={()=>{setClick(false)}}
              className="card-item"
              to="skill"
              spy={true}
              smooth={true}
              offset={20}
              duration={2000}
            >
              Skills
            </Link>

            <Link
            
            onClick={()=>{setClick(false)}}
              className="card-item"
              to="contact"
              spy={true}
              smooth={true}
              offset={-40}
              duration={2000}
            >
              Contacts
            </Link>

            <Link
            
            onClick={()=>{setClick(false)}}
              className="card-item"
              to="holder"
              spy={true}
              smooth={true}
              offset={-40}
              duration={2000}
            >
              Projects
            </Link>
            </div>
          </motion.div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Nav;
