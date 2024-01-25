"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useSpring, animated } from "react-spring";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isSkillsVisible, setSkillsIsVisible] = useState(false);
  const [isProjectsVisible, setProjectsIsVisible] = useState(false);
  const [isContactVisible, setContactIsVisible] = useState(false);

  const skills = useRef(null) as any;
  const projects = useRef(null) as any;
  const contact = useRef(null) as any;

  const skillsProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isSkillsVisible ? 1 : 0 },
  });

  const projectsProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isProjectsVisible ? 1 : 0 },
  });

  const contactProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: isContactVisible ? 1 : 0 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const viewHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight
      );
      if (skills.current.getBoundingClientRect().top <= viewHeight * 0.8 + 200 && skills.current.getBoundingClientRect().bottom >= viewHeight * 0.2 - 200) {
        setSkillsIsVisible(true);
      } else {
        setSkillsIsVisible(false);
      }

      if (projects.current.getBoundingClientRect().top <= viewHeight * 0.8 + 200 && projects.current.getBoundingClientRect().bottom >= viewHeight * 0.2 - 200) {
        setProjectsIsVisible(true);
      } else {
        setProjectsIsVisible(false);
      }

      if (contact.current.getBoundingClientRect().top <= viewHeight * 0.8 + 200 && contact.current.getBoundingClientRect().bottom >= viewHeight * 0.2 - 200) {
        setContactIsVisible(true);
      } else {
        setContactIsVisible(false);
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <animated.div ref={skills} style={skillsProps} >
        <Skills />
      </animated.div>
      <animated.div ref={projects} style={projectsProps} >
        <Projects />
      </animated.div>
      <animated.div ref={contact} style={contactProps} >
      <Contact />
      </animated.div>
    </main>
  );
}
