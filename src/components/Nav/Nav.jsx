import React, { useState } from "react";
import classes from "./Nav.module.css";
import Logo from "../Logo/Logo.jsx";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import git from "../res/drawable/git_dark.svg";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { motion } from "framer-motion";
import { Card } from "@mui/material";
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
              setClick(true);
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
        <motion.div onClick={()=>{setClick(false)}} initial={{x:'100ch', opacity:0}} transition={{stiffness:0}} animate={{x:0, opacity:1}} className={classes.nav_drop} style={{ position: "absolute" }}>
          <Card onClick={()=>{setClick(false)}} className={classes.nav_card}>
          <Link className="card-item"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Home
              </Link>
              <Link
              className="card-item"
                to="skill"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Skills
              </Link>

              <Link className="card-item"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Contacts
              </Link>

              <Link className="card-item"
                to="holder"
                spy={true}
                smooth={true}
                offset={0}
                duration={2000}
              >
                Projects
              </Link>

              
          </Card>
        </motion.div>
      )}
    </React.Fragment>
  );
};

export default Nav;
