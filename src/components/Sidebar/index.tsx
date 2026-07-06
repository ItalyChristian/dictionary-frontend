"use client";

import clsx from "clsx";
import * as styles from "./styles.css";
import { usePathname } from "next/navigation";
import { glass } from "@/styles/components/glass.css";
import { navItems } from "./data";

export const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <aside className={clsx(glass, styles.sidebar)}>
      <nav>
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${active ? styles.navLinkActive : ""}`}
            >
              <Icon
                className={`${styles.icon} ${styles.iconHover} ${active ? styles.iconActive : ""}`}
                size={18}
              />
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};
