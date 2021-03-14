import { useState, useEffect } from "react";

// Hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    windowX: undefined,
    windowY: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowX: window.innerWidth,
        windowY: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default useWindowSize;
