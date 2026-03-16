import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-secondary-foreground/70 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src={logoImg} alt="Easy Pick Locksmith" className="h-10" />
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted local locksmith providing fast, professional service for residential, commercial, and automotive needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-secondary-foreground mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg text-secondary-foreground mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Services</h4>
            <div className="flex flex-col gap-2 text-sm">
              <span>Residential Locksmith</span>
              <span>Commercial Locksmith</span>
              <span>Automotive Locksmith</span>
              <span>Emergency Services</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg text-secondary-foreground mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>info@easypicklocksmith.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Serving Your Local Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-xs">
          © {new Date().getFullYear()} Easy Pick Locksmith. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
