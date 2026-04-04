import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CheckoutDialogProps {
  open: boolean;
  planName: string;
  planPrice: string;
  loading: boolean;
  onClose: () => void;
  onSubmit: (sellWhat: string, sellTo: string) => void;
}

const CheckoutDialog = ({ open, planName, planPrice, loading, onClose, onSubmit }: CheckoutDialogProps) => {
  const [sellWhat, setSellWhat] = useState("");
  const [sellTo, setSellTo] = useState("");

  const handleSubmit = () => {
    if (!sellWhat.trim() || !sellTo.trim()) return;
    onSubmit(sellWhat, sellTo);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-2xl border border-border/50 bg-card p-10 md:p-14 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <p className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-2">{planName}</p>
              <h2 className="text-3xl md:text-4xl font-heading mb-2">Tell me about your project</h2>
              <p className="text-muted-foreground font-light mb-10">
                Help me understand what you're building so I can hit the ground running.
              </p>

              <div className="space-y-6 mb-10">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    What do you want to sell?
                  </label>
                  <textarea
                    value={sellWhat}
                    onChange={(e) => setSellWhat(e.target.value)}
                    className="w-full h-32 rounded-lg border border-border/50 bg-background/50 p-5 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/30 resize-none transition-all duration-300 font-light"
                    placeholder="Describe your product or service..."
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Who do you want to sell to?
                  </label>
                  <textarea
                    value={sellTo}
                    onChange={(e) => setSellTo(e.target.value)}
                    className="w-full h-32 rounded-lg border border-border/50 bg-background/50 p-5 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/30 resize-none transition-all duration-300 font-light"
                    placeholder="Describe your ideal customer..."
                  />
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-light tracking-wide text-base py-6"
                onClick={handleSubmit}
                disabled={loading || !sellWhat.trim() || !sellTo.trim()}
              >
                {loading ? "Loading..." : `Continue to Payment — ${planPrice}`}
                {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutDialog;
