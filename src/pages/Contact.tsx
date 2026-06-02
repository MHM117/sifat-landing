import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";

const Contact = () => {
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

        <h1 className="text-3xl font-bold text-foreground mb-8">Contact Us</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-muted-foreground text-lg mb-6">
            If you have any questions, need assistance, or would like to request the deletion of your account and all associated data, please contact us at:
          </p>

          <a 
            href="mailto:support@sifat.app" 
            className="inline-flex items-center gap-2 text-primary hover:underline text-lg font-medium"
          >
            <Mail size={20} />
            support@sifat.app
          </a>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Account Deletion</h2>
            <p className="text-muted-foreground mb-4">
              You can delete your account directly within the app by going to <span className="text-foreground font-medium">Settings → Account → Delete Account</span>. This will permanently remove your account and all associated data.
            </p>
            <p className="text-muted-foreground mb-4">
              If you'd like to start fresh without losing your account, you can reset your progress by going to <span className="text-foreground font-medium">Settings → Account → Reset Data</span>.
            </p>
            <p className="text-muted-foreground">
              Alternatively, you can email us at{" "}
              <a href="mailto:support@sifat.app" className="text-primary hover:underline">
                support@sifat.app
              </a>{" "}
              and we will process your request.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
