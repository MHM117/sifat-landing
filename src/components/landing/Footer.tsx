import { Link } from "react-router-dom";
import sifatLogo from "@/assets/sifat-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
    social: [
      { label: "Twitter", href: "https://x.com/HussainMemon_" },
      { label: "Instagram", href: "https://www.instagram.com/sifatapp/" },
      { label: "TikTok", href: "https://www.tiktok.com/@sifatapp?_r=1&_t=ZN-95FudHrL338" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={sifatLogo} alt="Sifat" className="h-12 w-auto" />
              <span className="font-semibold text-xl text-foreground">Sifat</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              Helping Muslims memorise and understand the Names of Allah through 
              daily practice and reflection.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              {links.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Sifat. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
