"use client";
import { useEffect } from "react";

export default function MotionObserver() {
  useEffect(() => {
    // Add 'js' class to root when component mounts client-side
    document.documentElement.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rv-in");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.05,
      }
    );

    // Track standard elements
    const selector = ".card, .item, .step, .agent, .shead, .tier, .own, .roi, .final, [data-rv]";
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      document.documentElement.classList.remove("js");
    };
  }, []);

  return null;
}
