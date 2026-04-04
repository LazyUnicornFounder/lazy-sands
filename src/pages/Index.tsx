import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import ShowcaseTicker from "@/components/ShowcaseTicker";
import { useState } from "react";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const plans = [
  {
    name: "Solo Founder",
    price: "$1,500",
    productId: "5cb2606d-ad4f-4f79-aac4-58ee56d01d2a",
    description: "Landing page, auth, 1 core feature, database",
    features: [
      "1 custom landing page",
      "User authentication",
      "1 core feature built out",
      "Database setup",
      "Domain & deployment",
      "1 round of revisions",
    ],
  },
  {
    name: "Small Business",
    price: "$3,500",
    productId: "ed7cc3e3-aec0-428b-8b81-f5c645ba2c65",
    description: "Full web app, dashboard, payments, 3-5 features",
    features: [
      "Full multi-page web app",
      "Dashboard included",
      "Payments integration",
      "3–5 core features",
      "Database & auth setup",
      "3 rounds of revisions",
    ],
  },
  {
    name: "Medium Business",
    price: "$7,500",
    productId: "c97eb6bd-5975-4796-8576-9cc34a68fe6d",
    description: "Multi-user, admin panel, integrations, analytics",
    features: [
      "Multi-user support",
      "Admin panel",
      "Third-party integrations",
      "Analytics dashboard",
      "Full auth & database",
      "2 weeks post-launch support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    productId: "",
    description: "Custom scope, SLA, dedicated support",
    features: [
      "Custom project scope",
      "SLA agreement",
      "Dedicated support",
      "Priority communication",
      "Unlimited revisions",
      "Ongoing maintenance",
    ],
  },
];
const Index = () => {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (productId: string) => {
    setLoading(productId);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { productId },
      });
      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <span className="font-heading font-bold text-xl text-foreground">
            <Sparkles className="inline-block w-5 h-5 text-primary mr-2" />
            LovableBuilder
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-10 md:pt-44 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.08)_0%,transparent_70%)]" />
        <div className="container relative text-left max-w-4xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 text-foreground text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary/50" /> Lovable certified Platinum builder
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight mb-6"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            I'm a <span className="text-gradient">Platinum Level</span> builder on Lovable and I help you launch a business on Lovable.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
            initial="hidden" animate="visible" variants={fadeUp} custom={1.5}
          >
            Whether you're a solo founder needing a landing page, a small business launching a full web app with payments, or a growing company that needs multi-user dashboards and integrations — I'll build it, deploy it, and hand it over ready to run.
          </motion.p>
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="mb-10"
          >
            <ShowcaseTicker />
          </motion.div>
          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-3xl mb-10"
            initial="hidden" animate="visible" variants={fadeUp} custom={2.5}
          >
            <div className="text-left">
              <label className="block text-sm font-medium text-muted-foreground mb-2">What do you want to sell?</label>
              <textarea
                className="w-full h-36 md:h-44 rounded-xl border border-border bg-card p-5 text-foreground text-base placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none transition-shadow"
                placeholder="Describe your product or service..."
              />
            </div>
            <div className="text-left">
              <label className="block text-sm font-medium text-muted-foreground mb-2">Who do you want to sell to?</label>
              <textarea
                className="w-full h-36 md:h-44 rounded-xl border border-border bg-card p-5 text-foreground text-base placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none transition-shadow"
                placeholder="Describe your ideal customer..."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Choose your package</h2>
            <p className="text-muted-foreground">One-time payment. No subscriptions. You own everything.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                className="relative p-8 rounded-2xl border border-border bg-card flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <h3 className="text-xl font-heading font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <p className="text-4xl font-heading font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.productId ? (
                  <Button
                    size="lg"
                    className="w-full"
                    variant="outline"
                    onClick={() => handleCheckout(plan.productId)}
                    disabled={loading === plan.productId}
                  >
                    {loading === plan.productId ? "Loading..." : "Buy Now"}
                    {loading !== plan.productId && <ArrowRight className="ml-2 w-4 h-4" />}
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className="w-full"
                    variant="outline"
                    onClick={() => window.location.href = "mailto:hello@lovablebuilder.com"}
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </motion.div>
            ))}
          </div>
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
