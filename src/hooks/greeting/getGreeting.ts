const specialGreetings: Record<string, string> = {
  Helena: `Hiiiiii, Helena! ❤️`,
  Taylor: `Hi, Taylor! Did you already posted the wedding pictures?`,
};

export function getGreeting(name?: string) {
  if (!name) {
    return "Welcome back!";
  }

  if (specialGreetings[name]) {
    return specialGreetings[name];
  }

  const hour = new Date().getHours();

  if (hour === 4) {
    return `Hi, ${name}! Kinda weird be awake right now...`;
  }

  if (hour < 12) {
    return `Good morning, ${name}!`;
  }

  if (hour < 18) {
    return `Good afternoon, ${name}!`;
  }

  return `Good evening, ${name}!`;
}
