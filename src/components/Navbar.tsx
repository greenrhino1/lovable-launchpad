import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <KeyRound className="h-7 w-7 text-primary" />
          <span className="text-2xl text-secondary-foreground tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            Easy Pick <span className="text-primary">Locksmith</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-secondary-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm" className="rounded-full font-semibold">
            <Phone className="mr-1.5 h-4 w-4" />
            Call Now
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-secondary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-secondary border-t border-secondary-foreground/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-secondary-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="rounded-full font-semibold w-full">
                <Phone className="mr-1.5 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
