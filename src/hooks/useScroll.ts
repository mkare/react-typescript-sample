import { useEffect } from "react";

export default function useScroll(callback: () => void) {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      console.log(event, "Scrolled");
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
}
