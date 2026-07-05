"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionObserver() {
  const pathname = usePathname();

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

    // Track standard elements on the current page
    const selector = ".card, .item, .step, .agent, .shead, .tier, .own, .roi, .final, [data-rv]";
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [pathname]); // Re-run the observer setup whenever the page route/pathname changes

  return null;
}
