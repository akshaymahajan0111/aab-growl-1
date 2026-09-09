import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';
import { home } from 'virtual:content';

const levelColors: Record<string, string> = {
  'Advanced': 'bg-primary text-primary-foreground',
  'All Levels': 'bg-foreground text-background',
  'Beginner': 'bg-secondary text-secondary-foreground border border-border',
  'Intermediate': 'bg-accent text-accent-foreground',
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function HomePage() {
  const siteUrl = 'https://satyayoga.com';

  return (
    <>
      <Helmet>
        <title>Satya Yoga India — Where Athletes Find Their Flow</title>
        <meta name="description" content="Satya Yoga offers Power Yoga, Vinyasa, Restorative, and Hot Yoga classes across India. Book your class online today." />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content="Satya Yoga India — Where Athletes Find Their Flow" />
        <meta property="og:description" content="Premium yoga classes for fitness enthusiasts and athletes across India. Every body. Every level. Every journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SportsActivityLocation',
          '@id': `${siteUrl}/#organization`,
          name: 'Satya Yoga India',
          url: siteUrl,
          description: 'Yoga studio for fitness enthusiasts and athletes across India offering online class bookings.',
          address: { '@type': 'PostalAddress', streetAddress: '12 Yoga Marg, Bandra West', addressLocality: 'Mumbai', addressRegion: 'Maharashtra', postalCode: '400050', addressCountry: 'IN' },
          telephone: '+919876543210',
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
          {/* Background image */}
          <img
            src="/airo-assets/images/pages/home/hero"
            alt="Satya Yoga — athlete in dynamic yoga pose"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-gray-900/20 pointer-events-none" />

          {/* Oversized editorial headline — partially cropped */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full">
            <p
              className="font-heading font-black text-white/[0.06] leading-none tracking-tighter pl-4 md:pl-8"
              style={{ fontSize: 'clamp(80px, 18vw, 220px)' }}
            >
              {home.hero.tagline}
            </p>
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="text-primary font-semibold text-sm tracking-widest uppercase mb-4"
            >
              {home.hero.tagline}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
              className="font-heading font-black text-white leading-none tracking-tight mb-4"
              style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
            >
              {home.hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' as const }}
              className="text-white/70 text-lg md:text-xl max-w-lg mb-8"
            >
              {home.hero.subheadline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' as const }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/classes"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-accent transition-colors duration-200 text-sm"
              >
                <span>{home.hero.cta}</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/classes"
                className="inline-flex items-center gap-2 text-white/80 font-medium text-sm hover:text-white transition-colors"
              >
                <span>{home.hero.secondaryCta}</span>
                <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Schedule teaser strip */}
          <div className="relative z-10 bg-white/10 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center gap-6 md:gap-10">
              {home.scheduleTeaser.map((s) => (
                <div key={s.id} className="flex items-center gap-2">
                  <Clock size={13} className="text-primary shrink-0" />
                  <span className="text-white/50 text-xs font-semibold uppercase tracking-wide">{s.day}</span>
                  <span className="text-white/80 text-xs">{s.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLASSES ── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-primary font-semibold text-xs tracking-widest uppercase mb-2">What we offer</p>
                <h2 className="font-heading font-black text-foreground leading-tight" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
                  Find your class
                </h2>
              </div>
              <Link to="/classes" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors">
                View full schedule <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {home.classes.map((cls, i) => (
                <motion.div
                  key={cls.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  style={{ minHeight: '340px' }}
                >
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/85 via-gray-900/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${levelColors[cls.level] ?? 'bg-primary text-primary-foreground'}`}>
                        {cls.level}
                      </span>
                      <span className="flex items-center gap-1 text-white/70 text-xs">
                        <Clock size={12} />
                        {cls.duration}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-white text-3xl md:text-4xl leading-tight mb-2">
                        {cls.name}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-xs">
                        {cls.description}
                      </p>
                      <Link
                        to="/classes"
                        className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-accent transition-colors"
                      >
                        Book this class <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY SATYA ── */}
        <section className="py-20 md:py-28 bg-secondary overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left — image + stat */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' as const }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/airo-assets/images/pages/home/why-satya"
                    alt="Satya Yoga studio interior"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={900}
                    height={700}
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -right-4 md:right-6 bg-primary text-white rounded-2xl px-6 py-5 shadow-xl">
                  <p className="font-heading font-black text-4xl leading-none">{home.whySatya.stat}</p>
                  <p className="text-white/80 text-sm mt-1">{home.whySatya.statLabel}</p>
                </div>
              </motion.div>

              {/* Right — quote + benefits */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
                className="pt-8 lg:pt-0"
              >
                <p className="text-primary font-semibold text-xs tracking-widest uppercase mb-4">Why Satya</p>
                <blockquote className="font-heading font-black text-foreground leading-tight mb-8" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
                  {home.whySatya.quote}
                </blockquote>
                <ul className="flex flex-col gap-4">
                  {home.whySatya.benefits.map((b) => (
                    <li key={b.id} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground text-base leading-relaxed">{b.text}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Our story <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── INSTRUCTORS ── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-primary font-semibold text-xs tracking-widest uppercase mb-2">Meet the team</p>
                <h2 className="font-heading font-black text-foreground leading-tight" style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
                  Your instructors
                </h2>
              </div>
              <Link to="/instructors" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors">
                All instructors <ArrowRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {home.instructors.map((instructor, i) => (
                <motion.div
                  key={instructor.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-square mb-4">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={400}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-xl">{instructor.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-1">{instructor.specialty}</p>
                  <p className="text-muted-foreground text-sm">{instructor.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ── */}
        <section className="bg-primary">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="max-w-xl"
            >
              <h2 className="font-heading font-black text-white leading-tight mb-3" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                {home.cta.headline}
              </h2>
              <p className="text-white/75 text-base md:text-lg">
                {home.cta.subheadline}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' as const }}
              className="shrink-0"
            >
              <Link
                to="/classes"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-secondary transition-colors duration-200 text-sm"
              >
                <span>{home.cta.button}</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
