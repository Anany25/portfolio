import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../SpecialComponents/Footer";
import "../../styles/ContactPage.css";

function ContactPage({ isBatterySavingOn, addTab }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const updateScale = () => {
      const contactContainer = document.querySelector(".contact-container");
      if (!contactContainer) return;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      let scaleValue = 1;
      if (screenHeight < 826 && screenWidth > 576) {
        scaleValue = screenHeight / 826;
      }
      contactContainer.style.zoom = `${scaleValue}`;
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.section
          id="contact"
          className="contact-page"
          ref={containerRef}
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/contact-bg.webp')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="contact-container">
            <div className="contact-div">
              <motion.h2
                className="section-header"
                initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
                whileInView={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
                transition={
                  isBatterySavingOn ? {} : { delay: 0, type: "spring" }
                }
              >
                Contact Me
              </motion.h2>
              <motion.h5
                className="contact-info"
                initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
                whileInView={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
                transition={
                  isBatterySavingOn ? {} : { delay: 0, type: "spring" }
                }
              >
                Email:{" "}
                <a href="mailto:ananykumarsingh25@gmail.com" className="lead">
                  ananykumarsingh25@gmail.com
                </a>
              </motion.h5>
              <motion.h5
                className="contact-info"
                initial={isBatterySavingOn ? {} : { opacity: 0, scale: 0 }}
                whileInView={isBatterySavingOn ? {} : { opacity: 1, scale: 1 }}
                transition={
                  isBatterySavingOn ? {} : { delay: 0, type: "spring" }
                }
              >
                Phone:{" "}
                <a href="tel:7165732402" className="lead">
                  +1 (716) 573-2402
                </a>
                {" | "}
                <a href="tel:918840259281" className="lead">
                  +91 8840259281
                </a>
              </motion.h5>
            </div>
          </div>
          <Footer isBatterySavingOn={isBatterySavingOn} addTab={addTab} />
        </motion.section>
      </AnimatePresence>
    </>
  );
}

export default ContactPage;
