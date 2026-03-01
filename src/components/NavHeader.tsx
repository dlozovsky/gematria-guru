"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, BookOpen, Info, BookMarked } from "lucide-react";

const navItems = [
  { to: "/", label: "Calculator", icon: Home },
  { to: "/number-maps", label: "Number Maps", icon: Map },
  { to: "/learning", label: "Learning", icon: BookOpen },
  { to: "/blog", label: "Blog", icon: BookMarked },
  { to: "/about", label: "About", icon: Info },
];

const NavHeader = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur shadow-sm border-b border-border">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 select-none">
          <span className="bg-primary text-white rounded-full p-1.5">
            <Home size={18} />
          </span>
          <span className="font-bold text-lg tracking-tight text-primary">Gematria Guru</span>
        </Link>
        <div className="flex gap-1 sm:gap-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              href={to}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-medium transition-colors text-sm ${
                pathname === to || (to !== "/" && pathname.startsWith(to))
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <Icon size={15} />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavHeader;
