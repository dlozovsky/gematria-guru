import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { Home, Map, BookOpen } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/number-maps", label: "Number Maps", icon: Map },
  { to: "/learning", label: "Learning Modules", icon: BookOpen },
]; // Home is always present

const Header = () => {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 w-full bg-primary/10 backdrop-blur shadow-md border-b border-primary/20">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3 rounded-b-xl">
        {/* Logo or App Icon */}
        <Link to="/" className="flex items-center gap-2 select-none">
          <span className="bg-primary text-white rounded-full p-1"><Home size={22} /></span>
          <span className="font-bold text-lg tracking-tight text-primary">Gematria Guru</span>
        </Link>
        {/* Navigation Links */}
        <div className="flex gap-2 sm:gap-4 bg-muted/50 rounded-full px-2 py-1 shadow-inner">
          {navItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-medium transition text-sm hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 ${location.pathname === to ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}
            >
              <Icon size={17} className="mb-0.5" />
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
