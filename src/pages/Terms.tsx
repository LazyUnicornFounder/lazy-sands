import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => (
  <div className="min-h-screen bg-background noise-bg">
    <div className="container max-w-3xl mx-auto py-24 px-6 relative z-10">
      <Link to="/">
        <Button variant="ghost" size="sm" className="mb-12 text-muted-foreground hover:text-foreground gap-2 font-light">
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
      </Link>

      <h1 className="text-4xl md:text-5xl font-heading mb-4">Terms of Service</h1>
      <p className="text-sm text-muted-foreground font-light mb-12">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

      <div className="space-y-10 text-muted-foreground font-light leading-relaxed text-sm">
        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">1. Agreement to Terms</h2>
          <p>By accessing or using the services provided by Lazy Sands ("we," "us," or "our"), a venture of Lazy Factory Ventures, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">2. Services</h2>
          <p>Lazy Sands provides web application development, deployment, and related digital services. All services are delivered on a project basis as described in the selected pricing package. Services are subject to availability and may be modified at our discretion.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">3. Payments</h2>
          <p>All payments are one-time, non-recurring charges processed through Polar. By purchasing a package, you agree to pay the listed price in full. All sales are final unless otherwise agreed in writing. Prices are subject to change without notice for future purchases.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">4. Intellectual Property</h2>
          <p>Upon full payment, you own all deliverables created specifically for your project. We retain the right to use general techniques, skills, and non-proprietary components. We may showcase completed work in our portfolio unless you request otherwise in writing.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">5. Client Responsibilities</h2>
          <p>You agree to provide timely feedback, content, and access necessary for project completion. Delays caused by lack of client input may extend delivery timelines. You are responsible for the accuracy of all content you provide.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">6. Revisions</h2>
          <p>Each package includes a specified number of revision rounds. Additional revisions beyond the included amount may incur extra charges. A revision round is defined as a single set of consolidated feedback.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Lazy Sands shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">8. Termination</h2>
          <p>Either party may terminate the engagement with written notice. In the event of termination, you are responsible for payment of all work completed up to the termination date.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">9. Changes to Terms</h2>
          <p>We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-heading text-foreground mb-3">10. Contact</h2>
          <p>For questions about these terms, please contact us at <a href="mailto:hello@lovablebuilder.com" className="text-primary/80 hover:text-primary underline underline-offset-4 transition-colors">hello@lovablebuilder.com</a>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Terms;
