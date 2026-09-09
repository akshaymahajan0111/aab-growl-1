import { Link } from 'react-router';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const classLinks = [
  { label: 'Power Yoga', href: '/classes' },
  { label: 'Vinyasa Flow', href: '/classes' },
  { label: 'Restorative', href: '/classes' },
  { label: 'Hot Yoga', href: '/classes' },
];

const studioLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Instructors', href: '/instructors' },
  { label: 'Schedule', href: '/classes' },
  { label: 'Contact', href: '/contact' },
];

const scheduleTeaser = [
  { day: 'Mon – Fri', time: '6:00 AM · 12:00 PM · 6:30 PM' },
  { day: 'Saturday', time: '8:00 AM · 10:30 AM' },
  { day: 'Sunday', time: '9:00 AM · Restorative only' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block mb-4">
            <img
              src="/airo-assets/images/logo/horizontal/dark"
              alt="Satya Yoga"
              className="block h-auto max-h-10 w-auto max-w-[140px] object-contain"
            />
          </Link>
          <p className="text-sm opacity-60 leading-relaxed mb-6">
            Where athletic performance meets mindful practice — rooted in India, built for today.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="opacity-50 hover:text-primary hover:opacity-100 transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="opacity-50 hover:text-primary hover:opacity-100 transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="opacity-50 hover:text-primary hover:opacity-100 transition-all">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Classes */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-primary mb-5">Classes</h3>
          <nav aria-label="Footer class links">
            <ul className="flex flex-col gap-3">
              {classLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Studio */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-primary mb-5">Studio</h3>
          <nav aria-label="Footer studio links">
            <ul className="flex flex-col gap-3">
              {studioLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm opacity-60 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Schedule + Contact */}
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-primary mb-5">Schedule</h3>
          <ul className="flex flex-col gap-3 mb-8">
            {scheduleTeaser.map((s) => (
              <li key={s.day}>
                <span className="block text-xs font-semibold opacity-40 uppercase tracking-wide">{s.day}</span>
                <span className="text-sm opacity-70">{s.time}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2.5">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity">
              <Phone size={14} className="text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:hello@satyayoga.in" className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity">
              <Mail size={14} className="text-primary shrink-0" />
              <span>hello@satyayoga.in</span>
            </a>
            <span className="flex items-start gap-2 text-sm opacity-60">
              <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
              <span>12 Yoga Marg, Bandra West, Mumbai 400050</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs opacity-30">© 2026 Satya Yoga India. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-xs opacity-30 hover:opacity-60 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="text-xs opacity-30 hover:opacity-60 transition-opacity">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
