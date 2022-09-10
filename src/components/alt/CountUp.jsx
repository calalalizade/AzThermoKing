import { React, useState, useEffect, useRef } from "react";

function CountUp({ duration, number }) {
  const [num, setNum] = useState(0);
  const [isElementVisible, setIsElementVisible] = useState();
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsElementVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  useEffect(() => {
    if (!isElementVisible) return;
    const incrementer = setInterval(() => {
      setNum((prev) => {
        if (prev < number) return prev + 1;
        clearInterval(incrementer);
        return prev;
      });
    }, duration);
  }, [isElementVisible]);

  return <span ref={myRef}>{isElementVisible && num}</span>;
}

export default CountUp;
