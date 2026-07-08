"use client";

import { useEffect, useState } from "react";
import { getGreeting } from "./getGreeting";

export function useGreeting(name?: string) {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      setGreeting(getGreeting(name));
    };

    updateGreeting();

    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000;

    const timeout = setTimeout(() => {
      updateGreeting();

      const interval = setInterval(updateGreeting, 60 * 1000);
    }, msUntilNextMinute);

    return () => clearTimeout(timeout);
  }, [name]);

  return greeting;
}
