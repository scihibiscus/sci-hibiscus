"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";

const ProjectsPageWrapper = () => {
    //Translating State
    const [localState, setLocalState] = useState("Initial State");

    const [lenis, setLenis] = useState<Lenis | null>(null);
    const newsletterRef = useRef<HTMLDivElement | null>(null);
  
    //Smooth Scroll
    useEffect(() => {
      const lenisInstance = new Lenis({
        duration: 1.2,
      });
  
      function raf(time: number) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
      // Store the lenis instance in state
      setLenis(lenisInstance);
    }, []);

  return (
    <div>ProjectsPageWrapper</div>
  )
}

export default ProjectsPageWrapper