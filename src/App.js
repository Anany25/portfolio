import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Suspense,
  lazy,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animated } from "@react-spring/web";
import axios from "axios";
import { AppLoad } from "./services/variants";
import "./App.css";
import Links from "./components/SpecialComponents/Links";
import NavBar from "./components/SpecialComponents/NavBar";
import PowerMode from "./components/SpecialComponents/PowerMode";
// Lazy load major page components for code splitting
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
const AboutPage = lazy(() => import("./components/AboutPage/AboutPage"));
const SkillPage = lazy(() => import("./components/SkillPage/SkillPage"));
const ExperiencePage = lazy(() =>
  import("./components/ExperiencePage/ExperiencePage")
);
const ProjectPage = lazy(() => import("./components/ProjectPage/ProjectPage"));
const ContactPage = lazy(() => import("./components/ContactPage/ContactPage"));
const WindowModal = lazy(() => import("./components/WindowModal/WindowModal"));
// import { cleanupEventListeners } from "./services/eventListenerRegistry";

function App({ isBatterySavingOn, setIsBatterySavingOn }) {
  const [scrolled, setScrolled] = useState(window.scrollY > 100);
  const [loggedIn, setLoggedIn] = useState(false);
  const [tabs, setTabs] = useState([]); // Tabs state for WindowModal
  const [isClosed, setIsClosed] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false); // Track if modal is minimized
  const [lastActiveIndex, setLastActiveIndex] = useState(0); // Track active tab index
  const [isWindowModalVisible, setIsWindowModalVisible] = useState(false);



  // Theme State
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);



  // useEffect(() => {
  //   const cleanupInterval = setInterval(() => {
  //     // Clean up listeners that haven't been active for over 60 seconds
  //     const remainingListeners = cleanupEventListeners(1000);
  //     // Optionally, you can log or set state with the remaining listeners count
  //     console.log("Remaining listeners:", remainingListeners.length);
  //   }, 10000);

  //   return () => clearInterval(cleanupInterval);
  // }, []);

  const addTab = useCallback((type, data) => {
    if (!data || typeof data !== "object") {
      console.error("Invalid data passed to addTab:", data);
      return;
    }

    setTabs((prev) => {
      const existingTabIndex = prev.findIndex(
        (tab) =>
          tab.name ===
          (data.title ||
            data.projectTitle ||
            data.experienceTitle ||
            data.honorsExperienceTitle ||
            data.involvementTitle ||
            data.yearInReviewTitle)
      );

      if (existingTabIndex !== -1) {
        // If the tab exists, set the active index and return the unchanged array
        setIsClosed(false); // Ensure the modal is visible
        setIsMinimized(false); // Ensure the modal is not minimized
        setLastActiveIndex(existingTabIndex);
        // console.log(
        //   "Tab already exists, switching to existing tab:",
        //   prev[existingTabIndex]
        // );
        return prev;
      }

      if (prev.length === 3) {
        // Shift all tabs forward
        const updatedTabs = prev
          .map((tab, idx) => {
            if (idx === 0) return null; // Drop the first tab
            return { ...tab, index: idx - 1 }; // Adjust the index of the rest
          })
          .filter(Boolean); // Remove the null first element

        const newTab = {
          index: updatedTabs.length,
          type,
          data,
          name:
            data.title ||
            data.projectTitle ||
            data.experienceTitle ||
            data.honorsExperienceTitle ||
            data.involvementTitle ||
            data.yearInReviewTitle ||
            `Tab ${updatedTabs.length + 1}`,
        };

        const result = [...updatedTabs, newTab];
        setLastActiveIndex(result.length - 1); // Set the last active index to the new tab
        // console.log("Tabs after addition (3 tabs max):", result);
        return result;
      }

      const newTab = {
        index: prev.length,
        type,
        data,
        name:
          data.title ||
          data.projectTitle ||
          data.experienceTitle ||
          data.honorsExperienceTitle ||
          data.involvementTitle ||
          data.yearInReviewTitle ||
          `Tab ${prev.length + 1}`,
      };
      const result = [...prev, newTab];
      setLastActiveIndex(result.length - 1); // Set the last active index to the new tab
      // console.log("Tabs after addition:", result);
      return result;
    });

    setIsClosed(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);



  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="App"
        variants={AppLoad("down")}
        initial="initial"
        animate={"show"}
      >
        <PowerMode
          isBatterySavingOn={isBatterySavingOn}
          setIsBatterySavingOn={setIsBatterySavingOn}
          scrolled={scrolled}
        />
        <NavBar isBatterySavingOn={isBatterySavingOn} addTab={addTab} />
        <Suspense fallback={null}>
          <HomePage
            isBatterySavingOn={isBatterySavingOn}
            scrolled={scrolled}
            addTab={addTab}

          />
        </Suspense>
        {/* {isWindowModalVisible && (
          <>
                  <AboutPage isBatterySavingOn={isBatterySavingOn} />
        <SkillPage isBatterySavingOn={isBatterySavingOn} />
        <ProjectPage addTab={addTab} isBatterySavingOn={isBatterySavingOn} />
        <ExperiencePage addTab={addTab} isBatterySavingOn={isBatterySavingOn} />
          </>
        )} */}
        <Suspense fallback={null}>
          <AboutPage
            isBatterySavingOn={isBatterySavingOn}
            isWindowModalVisible={isWindowModalVisible}
            addTab={addTab}
          />
        </Suspense>
        <Suspense fallback={null}>
          <SkillPage
            isBatterySavingOn={isBatterySavingOn}
            isWindowModalVisible={isWindowModalVisible}
          />
        </Suspense>
        <div
          style={{
            display: "sticky",
            top: 0,
            bottom: 0,
            width: "100%",
            // height: "calc(100vh - 52px)",
            height: "auto",
            overflow: "show",
          }}
        >
          <Suspense fallback={null}>
            <ProjectPage
              addTab={addTab}
              isBatterySavingOn={isBatterySavingOn}
              isWindowModalVisible={isWindowModalVisible}
            />
          </Suspense>
        </div>
        <Suspense fallback={null}>
          <ExperiencePage
            addTab={addTab}
            isBatterySavingOn={isBatterySavingOn}
            isWindowModalVisible={isWindowModalVisible}
          />
        </Suspense>
        <Suspense fallback={null}>
          <ContactPage isBatterySavingOn={isBatterySavingOn} addTab={addTab} />
        </Suspense>
        <Links
          isBatterySavingOn={isBatterySavingOn}
          isWindowModalVisible={isWindowModalVisible}
        />
        <Suspense fallback={null}>
          <WindowModal
            tabs={tabs}
            addTab={addTab}
            setTabs={setTabs}
            isClosed={isClosed}
            setIsClosed={setIsClosed}
            isMinimized={isMinimized}
            setIsMinimized={setIsMinimized}
            lastActiveIndex={lastActiveIndex}
            setLastActiveIndex={setLastActiveIndex}
            scrolled={scrolled}
            isBatterySavingOn={isBatterySavingOn}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            isWindowModalVisible={isWindowModalVisible}
            setIsWindowModalVisible={setIsWindowModalVisible}
          />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
