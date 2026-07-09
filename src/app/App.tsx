import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Assets from "@/imports/Assets/index";
import Assets2 from "@/imports/Assets-2/index";
import Assets3 from "@/imports/Assets-3/index";
import Assets4 from "@/imports/Assets-4/index";
import Assets5 from "@/imports/Assets-5/index";
import Assets6 from "@/imports/Assets-6/index";
import Assets7 from "@/imports/Assets-7/index";
import Assets8 from "@/imports/Assets-8/index";
import sidenavPaths from "@/imports/Sidenav/svg-qx0dcme2px";

type Screen =
  | "dashboard"
  | "sites"
  | "site-overview"
  | "site-controllers"
  | "equipment"
  | "alerts"
  | "workorders"
  | "analytics"
  | "report";

// Each nav item's icon matches the Sidenav import's rendering
const NAV_ITEMS: { id: Screen; label: string; icon: React.ReactNode }[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 18 18">
        <path d={sidenavPaths.p12df5ef0} fill="white" />
      </svg>
    ),
  },
  {
    id: "sites",
    label: "Sites",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 18 18">
        <path d={sidenavPaths.p15a4ff00} fill="white" />
      </svg>
    ),
  },
  {
    id: "equipment",
    label: "Equipment",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 18 18">
        <path d={sidenavPaths.pfb9c600} fill="white" />
        <path d={sidenavPaths.p38d09980} fill="white" />
        <path d={sidenavPaths.p28d58300} fill="white" />
        <path d={sidenavPaths.p2bc1ef00} fill="white" />
        <path d={sidenavPaths.p167d2380} fill="white" />
      </svg>
    ),
  },
  {
    id: "alerts",
    label: "Alerts",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 16 19.5">
        <path d={sidenavPaths.p28465100} fill="white" />
      </svg>
    ),
  },
  {
    id: "workorders",
    label: "Work Orders",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 22.03 21.9">
        <path d={sidenavPaths.p2688c000} fill="white" />
      </svg>
    ),
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 14 14">
        <path d={sidenavPaths.p17fe1c00} fill="white" />
      </svg>
    ),
  },
  {
    id: "report",
    label: "Report",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 16 20">
        <path d={sidenavPaths.p1e578210} fill="white" />
      </svg>
    ),
  },
];

function renderScreen(screen: Screen): React.ReactNode {
  switch (screen) {
    case "dashboard":   return <Assets />;
    case "alerts":      return <Assets2 />;
    case "sites":       return <Assets5 />;
    case "site-overview":    return <Assets3 />;
    case "site-controllers": return <Assets4 />;
    case "analytics":   return <Assets6 />;
    case "equipment":   return <Assets7 />;
    case "workorders":  return <Assets8 />;
    case "report":      return <Assets />;
    default:            return <Assets />;
  }
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [navOpen, setNavOpen] = useState(false);

  const navigate = (s: Screen) => {
    setScreen(s);
    setNavOpen(false);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Full-page screen */}
      <div className="absolute inset-0 overflow-auto">
        {renderScreen(screen)}
      </div>

      {/* Invisible expand button — sits over the baked double-arrow icon in the collapsed nav */}
      {!navOpen && (
        <button
          onClick={() => setNavOpen(true)}
          aria-label="Expand navigation"
          className="absolute z-50 cursor-pointer"
          style={{ top: 65, left: 6, width: 46, height: 30 }}
        />
      )}

      <AnimatePresence>
        {navOpen && (
          <>
            {/* Click-outside backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setNavOpen(false)}
              className="absolute inset-0 z-40 bg-black"
            />

            {/* Expanded sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: -210 }}
              animate={{ x: 0 }}
              exit={{ x: -210 }}
              transition={{ type: "spring", stiffness: 380, damping: 34 }}
              className="absolute left-0 z-50 flex flex-col"
              style={{
                top: 64,
                width: 191,
                height: "calc(100% - 64px)",
                backgroundColor: "#171a20",
              }}
            >
              {/* Matches the baked IconButton (white separator) */}
              <div className="bg-white h-px w-full shrink-0" />

              {/* Collapse button — arrows point left (rotated 180°) */}
              <button
                onClick={() => setNavOpen(false)}
                className="flex items-center justify-end w-full shrink-0 cursor-pointer pr-1 pt-1 pb-0.5"
                aria-label="Collapse navigation"
              >
                <div className="flex items-center justify-center p-1 rounded-full hover:bg-white/10 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 13.75 11.6667"
                    style={{ transform: "rotate(180deg)" }}
                  >
                    <path d={sidenavPaths.p6e7d780} fill="white" />
                    <path d={sidenavPaths.p2d9471f1} fill="white" />
                  </svg>
                </div>
              </button>

              {/* Navigation items */}
              <nav className="flex flex-col gap-[2px] px-3 pt-1 flex-1 overflow-y-auto">
                {NAV_ITEMS.map((item) => {
                  const active = screen === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => navigate(item.id)}
                      className="flex items-center gap-[11px] rounded-lg px-3 py-2 cursor-pointer text-left w-full transition-colors"
                      style={{
                        backgroundColor: active
                          ? "rgba(97,137,159,0.35)"
                          : undefined,
                      }}
                      onMouseEnter={(e) => {
                        if (!active)
                          (e.currentTarget as HTMLElement).style.backgroundColor =
                            "rgba(255,255,255,0.08)";
                      }}
                      onMouseLeave={(e) => {
                        if (!active)
                          (e.currentTarget as HTMLElement).style.backgroundColor =
                            "transparent";
                      }}
                    >
                      <span className="shrink-0">{item.icon}</span>
                      <span
                        className="text-white text-sm font-medium whitespace-nowrap"
                        style={{
                          fontFamily: "'Google Sans Flex', sans-serif",
                          fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100',
                        }}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
