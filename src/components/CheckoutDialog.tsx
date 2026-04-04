import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { lovable } from "@/integrations/lovable/index";
import { toast } from "sonner";

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
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (!sellWhat.trim() || !sellTo.trim()) return;
    localStorage.setItem("checkout_context", JSON.stringify({ sellWhat, sellTo, plan: planName }));
    setStep(2);
  };

  const handleClose = () => {
    setStep(1);
    onClose();
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
            onClick={handleClose}
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
                onClick={handleClose}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
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
                      onClick={handleNext}
                      disabled={!sellWhat.trim() || !sellTo.trim()}
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 font-light"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back
                    </button>

                    <p className="text-xs uppercase tracking-[0.3em] text-primary/70 mb-2">{planName}</p>
                    <h2 className="text-3xl md:text-4xl font-heading mb-2">Sign in to continue</h2>
                    <p className="text-muted-foreground font-light mb-10">
                      Create an account so we can keep you updated on your project.
                    </p>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-border/50 text-foreground hover:bg-card/80 transition-all duration-300 font-light tracking-wide text-sm py-6 gap-3"
                      onClick={async () => {
                        const result = await lovable.auth.signInWithOAuth("google", {
                          redirect_uri: window.location.origin,
                        });
                        if (result.error) {
                          toast.error("Google sign-in failed. Please try again.");
                        }
                      }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      Sign in with Google
                    </Button>

                    <div className="flex items-center gap-3 my-6">
                      <div className="h-px flex-1 bg-border/50" />
                      <span className="text-xs text-muted-foreground/50 uppercase tracking-widest font-light">or</span>
                      <div className="h-px flex-1 bg-border/50" />
                    </div>

                    <Button
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-light tracking-wide text-base py-6"
                      onClick={() => onSubmit(sellWhat, sellTo)}
                      disabled={loading}
                    >
                      {loading ? "Loading..." : `Skip to Payment — ${planPrice}`}
                      {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutDialog;
