"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import NavItem from "./NavItem";

type NavItemData = {
  icon: string;
  label: string;
  href?: string;
};

type NavigationDrawerProps = {
  items: NavItemData[];
};

export default function NavigationDrawer({ items }: NavigationDrawerProps) {
  const [open, setOpen] = useState(false);

  const sectionIds = useMemo(
    () =>
      items
        .map((item) => item.href?.replace("#", ""))
        .filter((id): id is string => !!id && id.length > 0),
    [items],
  );
  const activeSection = useActiveSection(sectionIds);

  function isActive(item: NavItemData) {
    if (item.href === "#") {
      return !activeSection;
    }
    return activeSection === item.href?.replace("#", "");
  }

  return (
    <>
      {/* Mobile drawer overlay */}
      <div className="sm:hidden">
        <motion.button
          className="icon fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.06] bg-surface/80 text-3xl shadow-lg shadow-black/30 backdrop-blur-2xl"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
        >
          {open ? "close" : "menu"}
        </motion.button>
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed inset-0 z-40 bg-black/30 "
                onClick={() => setOpen(false)}
              />
              <motion.nav
                key="drawer"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_event, { offset, velocity }) => {
                  if (offset.x < -80 || (offset.x < -40 && velocity.x < -200)) {
                    setOpen(false);
                  }
                }}
                className="fixed left-0 top-0 z-50 flex h-full w-4/5 max-w-sm flex-col gap-1 border-r border-white/[0.06] bg-surface/95 p-6 pt-20 shadow-2xl shadow-black/50 backdrop-blur-2xl"
              >
                <div className="flex items-center gap-3 px-4 py-3 mb-2">
                  <span className="text-xs font-medium tracking-widest uppercase text-text/40">
                    Cesar Marcano
                  </span>
                </div>
                {items.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                      delay: i * 0.035,
                    }}
                  >
                    <NavItem {...item} isActive={isActive(item)} />
                  </motion.div>
                ))}
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop backdrop (outside card container to avoid stacking conflicts) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="desktop-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 hidden sm:block bg-black/20 "
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Desktop floating card */}
      <div className="fixed top-10 left-10 z-50 hidden sm:block">
        <AnimatePresence>
          {open && (
            <motion.div
              key="card"
              initial={{ opacity: 0, x: -24, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -24, scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                mass: 0.8,
              }}
              className="rounded-2xl border border-white/[0.06] bg-surface/80 shadow-2xl shadow-black/40 backdrop-blur-2xl backdrop-saturate-150"
            >
              <div className="flex w-80 flex-col gap-1 p-3">
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] mb-1">
                  <span className="text-xs font-medium tracking-widest uppercase text-text/40">
                    Cesar Marcano
                  </span>
                </div>
                {items.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                      delay: i * 0.035,
                    }}
                  >
                    <NavItem {...item} isActive={isActive(item)} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="icon absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.06] bg-surface/80 shadow-lg shadow-black/30 text-4xl backdrop-blur-2xl"
          animate={{
            x: open ? 312 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
            mass: 0.8,
          }}
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
          >
            {open ? "menu_open" : "menu"}
          </motion.span>
        </motion.button>
      </div>
    </>
  );
}
