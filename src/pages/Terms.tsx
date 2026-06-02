import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Terms of Service</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: March 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using Sifat ("Licensed Application"), you ("End-User") agree to be bound by these Terms of Service concluded between you and Hussain Memon ("Developer," "we," "us," or "our").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">License Scope</h2>
            <p className="text-muted-foreground">
              Subject to your compliance with these Terms, we grant you a limited, non-transferable, non-exclusive license to download, install, and use the Licensed Application on devices you own or control, as permitted by the applicable platform's terms of service (Apple App Store, Google Play Store).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Subscriptions</h2>
            <p className="text-muted-foreground mb-4">
              Sifat requires a paid subscription. Subscription fees are billed in advance on a monthly or yearly basis depending on the plan you choose.
            </p>
            <p className="text-muted-foreground">
              You may cancel your subscription at any time through the App Store or Google Play Store. Cancellation will take effect at the end of your current billing period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Account Deletion</h2>
            <p className="text-muted-foreground">
              You may delete your account and all associated data at any time through the app settings. Deletion is permanent and cannot be undone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              The content, features, and functionality of Sifat are owned by us and are protected by copyright, trademark, and other intellectual property laws. The app incorporates Islamic scholarly content from classical and contemporary sources. All sources are appropriately attributed.
            </p>
            <p className="text-muted-foreground">
              We are solely responsible for addressing any third-party intellectual property infringement claims related to the Licensed Application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Maintenance and Support</h2>
            <p className="text-muted-foreground">
              We are solely responsible for providing maintenance and support services for the Licensed Application. Platform providers (Apple, Google) have no obligation to furnish maintenance or support services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Warranty and Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              The Licensed Application is provided "as is" without warranties of any kind, whether express or implied. We strive for accuracy in all Islamic content but recommend verifying with qualified scholars for matters of religious practice.
            </p>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, platform providers have no warranty obligations for the Licensed Application. Any claims, losses, or damages are our sole responsibility.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Product Claims and Liability</h2>
            <p className="text-muted-foreground">
              We, not the platform providers, are responsible for addressing any claims relating to the Licensed Application or your possession and use of it, including: (i) product liability claims; (ii) claims that the Licensed Application fails to conform to legal or regulatory requirements; and (iii) claims under consumer protection, privacy, or similar legislation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Legal Compliance</h2>
            <p className="text-muted-foreground">
              You represent and warrant that: (i) you are not located in a country subject to a U.S. Government embargo or designated as a "terrorist supporting" country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Third-Party Terms</h2>
            <p className="text-muted-foreground">
              You must comply with all applicable third-party terms of agreement when using the Licensed Application, including your wireless data service agreement and the terms of service for the app distribution platform (Apple App Store, Google Play Store).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Platform-Specific Terms (Apple App Store)</h2>
            <p className="text-muted-foreground mb-4">
              For users who download the Licensed Application from the Apple App Store, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>This agreement is between you and Hussain Memon, not Apple</li>
              <li>Apple and its subsidiaries are third-party beneficiaries of this agreement and may enforce it against you</li>
              <li>In the event of warranty failure, you may notify Apple for a refund of the purchase price</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may update these Terms from time to time. Changes will be posted with an updated "Last updated" date. Continued use of the app constitutes acceptance of updated terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of England and Wales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:support@sifat.app" className="text-primary hover:underline">
                support@sifat.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
