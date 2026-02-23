import { useEffect, useRef } from "react";

export function useUserActivity(timeout: number) {
  const lastActivity = useRef(Date.now());

  useEffect(() => {
    const update = () => (lastActivity.current = Date.now());
    const events = ["scroll", "mousemove", "keydown", "click", "touchstart"];

    events.forEach((e) => window.addEventListener(e, update));
    return () => events.forEach((e) => window.removeEventListener(e, update));
  }, []);

  return {
    lastActivity,
    isIdle: () => Date.now() - lastActivity.current > timeout,
  };
}
