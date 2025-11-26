import React, { useState, useEffect, memo } from "react";
import { zoomIn, fadeIn } from "../../services/variants";
import "../../styles/SkillPage.css";
import github from "../../assets/img/icons/github.png";
import SkillGraphCarousel from "./SkillGraph";
import SkillSection from "./SkillSection";
import { fetchSkillsComponents } from "../../services/skillComponentService";
import { motion } from "framer-motion";

function SkillPage({ isBatterySavingOn, isWindowModalVisible }) {
  // const [skillScreenWidth, setSkillScreenWidth] = useState(window.innerWidth);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const fetchedSkills = await fetchSkillsComponents();
        setSkills(fetchedSkills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    loadSkills();
  }, []);

  useEffect(() => {
    const updateScale = () => {
      const skillBox = document.querySelector(".skill-box");
      if (!skillBox) return;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      let scaleValue = 1;
      if (screenHeight < 826 && screenWidth > 576) {
        scaleValue = screenHeight / 826;
      }
      skillBox.style.zoom = `${scaleValue}`;
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);



  return (
    <section
      className="skill-container"
      id="skills"
      style={{ overflow: "hidden" }}
    >
      <motion.div
        className="skill-div"
        variants={isBatterySavingOn ? {} : zoomIn(0)}
        initial="show"
        whileInView="show"
        exit="hidden"
        style={
          isWindowModalVisible
            ? { opacity: 0, transition: "opacity 0.5s ease-in-out" }
            : { opacity: 1, transition: "opacity 0.5s ease-in-out" }
        }
      >
        <div className="skill-box">
          <motion.h2
            className="skill-heading"
            variants={isBatterySavingOn ? {} : fadeIn("right", 200, 0)}
            initial="hidden"
            animate="show"
          >
            Skills
          </motion.h2>
          <motion.div className="skill-section">
            <motion.p
              className="skill-paragraph"
              variants={isBatterySavingOn ? {} : fadeIn("right", 200, 0)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <strong>My TechStack</strong>
            </motion.p>
            <motion.div
              className="skill-carousel-container"
              variants={isBatterySavingOn ? {} : zoomIn(0)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <SkillSection isBatterySavingOn={isBatterySavingOn} />
            </motion.div>
            <motion.p
              className="skill-paragraph"
              variants={isBatterySavingOn ? {} : fadeIn("right", 200, 0)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <strong>My Workspace</strong>
            </motion.p>
            <motion.div className="last-skill-row">
              <motion.div className="last-skill-column column1">
                <a
                  href="https://github.com/Anany25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-icon"
                >
                  <img src={github} alt="GitHub" />
                </a>
              </motion.div>
              <motion.div className="last-skill-column column2">
                <motion.div
                  className="skill-graph-carousel"
                  variants={isBatterySavingOn ? {} : zoomIn(0)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                >
                  <SkillGraphCarousel
                    skills={skills}
                    isBatterySavingOn={isBatterySavingOn}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default memo(SkillPage);
