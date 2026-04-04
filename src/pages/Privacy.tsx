import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => (
  <div className="min-h-screen bg-background noise-bg">
    <div className="container max-w-3xl mx-auto py-24 px-6 relative z-10">
      <Link to="/">
        <Button variant="ghost" size="sm" className="mb-12 text-muted-foreground hover:text-foreground gap-2 font-light">
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
      </Link>

      <h1 className="text-4xl md:text-5xl font-heading mb-4">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground font-light mb-12">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

      <div className="space-y-10 text-muted-foreground font-light leading-relaxed text-sm">
        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, and project details when you purchase a service or create an account. We may also collect usage data such as browser type, pages visited, and referring URLs through standard analytics tools.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">2. How We Use Your Information</h2>
          <p>We use your information to deliver and improve our services, process payments, communicate about your project, and send occasional updates. We will never sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">3. Payment Processing</h2>
          <p>Payments are processed securely through Polar. We do not store your credit card information on our servers. All payment data is handled in accordance with Polar's security and privacy standards.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">4. Data Storage & Security</h2>
          <p>Your data is stored securely using industry-standard measures. We take reasonable precautions to protect your personal information, but no method of electronic storage is 100% secure. We retain your data only as long as necessary to provide our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">5. Cookies</h2>
          <p>We may use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">6. Third-Party Services</h2>
          <p>We may use third-party services for analytics, hosting, and payment processing. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the practices of third-party services.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">7. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us. We will respond to your request within a reasonable timeframe, typically within 30 days.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">8. Children's Privacy</h2>
          <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">10. Contact</h2>
          <p>For privacy-related inquiries, please contact us at <a href="mailto:lazy@lazyunicorn.ai" className="text-primary/80 hover:text-primary underline underline-offset-4 transition-colors">lazy@lazyunicorn.ai</a>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Privacy;
