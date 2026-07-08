export const loginAttempts = new Map<
  string,
  { count: number; blockedUntil: number }
>();

export function resetLoginAttempts(email: string): void {
  loginAttempts.delete(`${email}`);
}

export function incrementLoginAttempts(email: string): void {
  const key = `${email}`;
  const attempt = loginAttempts.get(key);

  if (!attempt) {
    loginAttempts.set(key, { count: 1, blockedUntil: 0 });
    return;
  }

  const newCount = attempt.count + 1;

  if (newCount >= 5) {
    loginAttempts.set(key, {
      count: newCount,
      blockedUntil: Date.now() + 15 * 60 * 1000,
    });
    return;
  }

  loginAttempts.set(key, { count: newCount, blockedUntil: 0 });
}

export function checkRateLimit(email: string): {
  blocked: boolean;
  remainingTime?: number;
} {
  const key = `${email}`;
  const attempt = loginAttempts.get(key);

  if (attempt && attempt.blockedUntil > Date.now()) {
    const remainingTime = Math.ceil(
      (attempt.blockedUntil - Date.now()) / 60000,
    );
    return { blocked: true, remainingTime };
  }

  return { blocked: false };
}
