import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Classes', href: '/classes' },
  { label: 'Instructors', href: '/instructors' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="shrink-0 flex items-center">
          {/* Show light-surface logo when scrolled (white bg), dark-surface logo when transparent over hero */}
          <img
            src={scrolled ? '/airo-assets/images/logo/horizontal/light' : '/airo-assets/images/logo/horizontal/dark'}
            alt="Satya Yoga"
            className="block h-auto max-h-10 md:max-h-12 w-auto max-w-[160px] object-contain transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                scrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
              } ${location.pathname === link.href ? 'text-primary' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/classes"
            className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-accent transition-colors duration-200"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors ${
            scrolled ? 'text-foreground' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-4 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-6 py-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/classes"
            className="mt-2 bg-primary text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-accent transition-colors"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
