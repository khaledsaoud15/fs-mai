import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const smallCircleRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const smallCircle = smallCircleRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    // Capture mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Smooth animation loop using requestAnimationFrame
    const render = () => {
      posX += (mouseX - posX) * 0.1; // Smooth movement for small circle
      posY += (mouseY - posY) * 0.1; // Smooth movement for small circle

      if (smallCircle) {
        gsap.set(smallCircle, {
          x: posX - 5,
          y: posY - 5,
        });
      }

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const hoverElements = document.querySelectorAll(".hoverable");

    // Mouse enter and leave handlers
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Clean up event listeners
    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const smallCircle = smallCircleRef.current;

    if (isHovering) {
      // Stop any existing pulse animation
      gsap.killTweensOf(smallCircle);

      // Animate pulsing and scaling effect
      gsap.to(smallCircle, {
        scale: 1.5, // Grow size
        duration: 0.3,
        ease: "power2.inOut",
        backgroundColor: "transparent", // Transparent background
        borderColor: "#000",
        borderWidth: "1px",
      });
      //   gsap.to(smallCircle, {
      //     scale: 1.7, // Pulse effect
      //     repeat: -1,
      //     yoyo: true,
      //     duration: 1,
      //     ease: "power1.inOut",
      //     borderWidth: "1px",
      //     borderColor: "#000",
      //     overwrite: "auto",
      //   });
    } else {
      // Stop pulsing animation
      //   gsap.killTweensOf(smallCircle);

      // Reset cursor to default state
      gsap.to(smallCircle, {
        scale: 1, // Reset size
        duration: 0.3,
        ease: "power2.inOut",
        backgroundColor: "transparent", // Default background color
        borderWidth: "1px", // Remove border
      });
    }
  }, [isHovering]);

  return (
    <div
      ref={smallCircleRef}
      className="fixed w-4 h-4 bg-transparent  rounded-full pointer-events-none z-[9998] border border-black"
    ></div>
  );
};

export default CustomCursor;
