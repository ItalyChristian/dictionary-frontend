"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/hooks/auth/useAuth";
import clsx from "clsx";
import * as styles from "./styles.css";
import { glass } from "@/styles/components/glass.css";
import { navItems } from "./data";
import { DoorOpen, Menu, X } from "lucide-react";
import { colors } from "@/styles/tokens/colors.css";

export const Sidebar = () => {
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);
  const handleClose = () => setVisible(false);

  const { logout } = useAuth();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      {visible ? (
        <button
          className={styles.menuMobileIcon}
          onClick={handleClose}
          aria-label="Fechar menu"
          style={{ background: "none" }}
        >
          <X size={24} />
        </button>
      ) : (
        <button
          className={styles.menuMobileIcon}
          onClick={() => setVisible(true)}
          aria-label="Abrir menu"
          style={{ background: colors.status.successBgSec }}
        >
          <Menu size={24} />
        </button>
      )}

      <aside
        className={clsx(
          glass,
          styles.sidebar,
          visible && styles.showMobileMenu,
        )}
      >
        <nav className={styles.nav}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClose}
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

        <span className={styles.logout} onClick={logout}>
          <DoorOpen /> <p>Logout</p>
        </span>
      </aside>
    </>
  );
};
