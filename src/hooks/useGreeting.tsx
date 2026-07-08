"use client";

import { useState, useEffect } from "react";

export function useGreeting(name?: string) {
  const [greeting, setGreeting] = useState("");

  const calculateGreeting = () => {
    const now = new Date();
    const hour = now.getHours();

    if (!name) {
      return "Welcome back!";
    }

    if (hour >= 5 && hour <= 11) {
      return `Good morning, ${name}!`;
    }

    if (hour >= 12 && hour <= 17) {
      return `Good afternoon, ${name}!`;
    }

    if (hour === 4) {
      return `Hi, ${name}! Kinda weird be awake right now...`;
    }

    return `Good evening, ${name}!`;
  };

  useEffect(() => {
    setGreeting(calculateGreeting());

    const now = new Date();

    const secondsUntilNextMinute = 60 - now.getSeconds();
    const msUntilNextMinute = secondsUntilNextMinute * 1000;

    const timeout = setTimeout(() => {
      setGreeting(calculateGreeting());

      const interval = setInterval(() => {
        setGreeting(calculateGreeting());
      }, 60 * 1000);

      return () => clearInterval(interval);
    }, msUntilNextMinute);

    return () => clearTimeout(timeout);
  }, [name]);

  return greeting;
}
