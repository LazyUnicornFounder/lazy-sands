import { motion } from "framer-motion";
import { Sparkles, Layout, Rocket, MessageSquare, ArrowRight, CheckCircle2, Zap, Users, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: Layout,
    title: "Custom Web Apps",
    description: "From idea to production-ready app — built fast with Lovable's AI-powered platform.",
  },
  {
    icon: Rocket,
    title: "MVP Launch",
    description: "Get your minimum viable product live in days, not months. Perfect for startups and founders.",
  },
  {
    icon: Code2,
    title: "App Optimization",
    description: "Already on Lovable? I'll refine your design, fix bugs, and add features that delight users.",
  },
  {
    icon: MessageSquare,
    title: "1-on-1 Coaching",
    description: "Learn to build confidently on Lovable with personalized sessions tailored to your goals.",
  },
];

const steps = [
  { number: "01", title: "Discovery Call", description: "We discuss your vision, goals, and timeline." },
  { number: "02", title: "Design & Build", description: "I craft your app on Lovable with rapid iterations." },
  { number: "03", title: "Review & Launch", description: "You review, we refine, and go live together." },
];

const testimonials = [
  {
    quote: "Went from a napkin sketch to a live product in under a week. Absolutely incredible.",
    name: "Sarah K.",
    role: "Startup Founder",
  },
  {
    quote: "The coaching sessions unlocked Lovable for me. Now I build my own features confidently.",
    name: "Marcus T.",
    role: "Solo Entrepreneur",
  },
  {
    quote: "Professional, fast, and truly understands what makes a great web app. Highly recommend.",
    name: "Elena R.",
    role: "Agency Owner",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <span className="font-heading font-bold text-xl text-foreground">
            <Sparkles className="inline-block w-5 h-5 text-primary mr-2" />
            LovableBuilder
          </span>
          <Button size="sm">
            Book a Call
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.08)_0%,transparent_70%)]" />
        <div className="container relative text-center max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
              <Zap className="w-3.5 h-3.5" /> Lovable Expert
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight mb-6"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            I turn your ideas into{" "}
            <span className="text-gradient">stunning web apps</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            Expert Lovable developer helping founders, creators, and businesses ship beautiful products — fast.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
          >
            <Button size="lg" className="glow-primary text-base px-8">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              See My Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What I can build for you</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Whether you need a full product or a helping hand, I've got you covered.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              >
                <s.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container max-w-3xl">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How it works</h2>
            <p className="text-muted-foreground">Three simple steps to your dream product.</p>
          </motion.div>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex gap-6 items-start"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              >
                <span className="text-4xl font-heading font-bold text-primary/20">{step.number}</span>
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What clients say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="p-6 rounded-xl border border-border bg-card"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              >
                <p className="text-foreground text-sm leading-relaxed mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border/50">
        <div className="container text-center max-w-2xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Users className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to build something amazing?</h2>
            <p className="text-muted-foreground mb-8">
              Let's chat about your project and see how fast we can bring it to life.
            </p>
            <Button size="lg" className="glow-primary text-base px-10">
              Book Your Free Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-heading font-semibold text-foreground">
            <Sparkles className="inline-block w-4 h-4 text-primary mr-1" />
            LovableBuilder
          </span>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
