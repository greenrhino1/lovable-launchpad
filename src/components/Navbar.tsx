import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown, Home, Building2, Car, Siren } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { label: "Residential", path: "/services/residential", icon: Home },
  { label: "Commercial", path: "/services/commercial", icon: Building2 },
  { label: "Automotive", path: "/services/automotive", icon: Car },
  { label: "Emergency", path: "/services/emergency", icon: Siren },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive = location.pathname.startsWith("/services");

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Easy Pick Locksmith" className="h-10" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-secondary-foreground/70"
            }`}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                isServicesActive ? "text-primary" : "text-secondary-foreground/70"
              }`}
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl border border-border bg-card shadow-xl overflow-hidden"
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-primary/10 ${
                        location.pathname === link.path
                          ? "text-primary bg-primary/5"
                          : "text-foreground"
                      }`}
                    >
                      <link.icon className="h-4 w-4 text-primary" />
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/about" ? "text-primary" : "text-secondary-foreground/70"
            }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/contact" ? "text-primary" : "text-secondary-foreground/70"
            }`}
          >
            Contact
          </Link>

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
            <div className="px-6 py-4 flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-base font-medium ${
                  location.pathname === "/" ? "text-primary" : "text-secondary-foreground/70"
                }`}
              >
                Home
              </Link>

              {/* Mobile services accordion */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`flex items-center justify-between py-2 text-base font-medium ${
                  isServicesActive ? "text-primary" : "text-secondary-foreground/70"
                }`}
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-2 py-2 text-sm ${
                            location.pathname === link.path
                              ? "text-primary"
                              : "text-secondary-foreground/60"
                          }`}
                        >
                          <link.icon className="h-4 w-4 text-primary" />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-base font-medium ${
                  location.pathname === "/about" ? "text-primary" : "text-secondary-foreground/70"
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-base font-medium ${
                  location.pathname === "/contact" ? "text-primary" : "text-secondary-foreground/70"
                }`}
              >
                Contact
              </Link>

              <Button className="rounded-[5%] font-semibold w-full mt-2">
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
