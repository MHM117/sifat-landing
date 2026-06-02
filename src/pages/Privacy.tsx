import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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

        <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: March 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Sifat ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
            </p>
            <p className="text-muted-foreground">
              By using Sifat, you agree to the collection and use of information in accordance with this policy. For questions, contact us at{" "}
              <a href="mailto:support@sifat.app" className="text-primary hover:underline">support@sifat.app</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We collect the following types of information:</p>

            <h3 className="text-lg font-medium text-foreground mb-2">Personal Information:</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Email address</li>
              <li>Display name (optional)</li>
              <li>User account ID</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mb-2">Usage Data:</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Learning progress and quiz scores</li>
              <li>App usage patterns and preferences</li>
              <li>Device information (device type, operating system)</li>
              <li>Analytics data (app opens, feature usage, session duration)</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mb-2">Technical Data:</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Device identifiers</li>
              <li>Crash logs and error reports</li>
              <li>Push notification tokens</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Create and maintain your account (GDPR Art. 6b - contract fulfillment)</li>
              <li>Sync your learning progress across devices (GDPR Art. 6b - contract fulfillment)</li>
              <li>Process your subscription and manage payments (GDPR Art. 6b - contract fulfillment)</li>
              <li>Personalize your learning experience (GDPR Art. 6f - legitimate interest)</li>
              <li>Analyze and improve app performance (GDPR Art. 6f - legitimate interest)</li>
              <li>Send push notifications about your learning progress (GDPR Art. 6a - consent)</li>
              <li>Detect and resolve technical issues (GDPR Art. 6f - legitimate interest)</li>
              <li>Prevent fraudulent activity (GDPR Art. 6f - legitimate interest)</li>
            </ul>
            <p className="text-muted-foreground">
              We do not use automated decision-making that has legal or similar impact on your rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">
              We use the following third-party service providers who may access your information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong>Supabase:</strong> Data storage and authentication</li>
              <li><strong>Firebase:</strong> Analytics and crash reporting</li>
              <li><strong>RevenueCat:</strong> Subscription management</li>
              <li><strong>OneSignal:</strong> Push notifications</li>
            </ul>
            <p className="text-muted-foreground">
              These providers are obligated to protect your information and use it only for the purposes outlined in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Storage and Transfer</h2>
            <p className="text-muted-foreground">
              Your personal information is stored on servers located in the United States. We ensure all service providers comply with GDPR requirements through Data Processing Agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">5. How We Share Information</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>With third-party service providers necessary to operate the app</li>
              <li>To comply with legal obligations or enforceable governmental requests</li>
              <li>To protect against harm to our rights, property, or safety, or that of our users</li>
              <li>In connection with a business transfer (merger, acquisition, or sale of assets)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Data Security</h2>
            <p className="text-muted-foreground">
              We implement security measures including encryption, firewalls, and secure authentication to protect your information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Data Retention and Deletion</h2>
            <p className="text-muted-foreground">
              We retain your personal information for as long as your account is active or as needed to provide services. You may delete your account and all associated data at any time through the app settings. Deletion is permanent and cannot be undone.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Under GDPR and UK data protection laws, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your information ("right to be forgotten")</li>
              <li>Restrict or object to processing of your information</li>
              <li>Data portability (receive your data in a structured format)</li>
              <li>Withdraw consent for notifications</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              To exercise these rights, contact us at{" "}
              <a href="mailto:support@sifat.app" className="text-primary hover:underline">support@sifat.app</a>.
            </p>
            <p className="text-muted-foreground">
              You also have the right to lodge a complaint with your data protection authority if you believe we are not complying with data protection requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Sifat does not knowingly collect information from children under 13 without parental consent. If we learn we have collected such information, we will delete it immediately. If you believe we have collected information from a child under 13, contact us at{" "}
              <a href="mailto:support@sifat.app" className="text-primary hover:underline">support@sifat.app</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Communications</h2>
            <p className="text-muted-foreground">
              You may opt out of promotional notifications through your device settings or in-app notification preferences. We may still send you administrative messages regarding your account or subscription.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Significant changes will be communicated via email or in-app notification 30 days before taking effect. Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground">
              This Privacy Policy is governed by the laws of England and Wales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default Privacy;
