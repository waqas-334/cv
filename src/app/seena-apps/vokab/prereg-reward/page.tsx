import React from "react";
import { Metadata } from "next";
import GoogleAnalytics from "@/components/google-analytics-event";

export const metadata: Metadata = {
  title: `Vokab Pre-Registration Reward`,
  description: "Terms and Conditions",
};

export default function PrivacyPolicy() {
  return (
    <>
      <GoogleAnalytics
        eventName="page_view_custom"
        eventParams={{
          page_title: "Vokab Pre-Registration Reward",
          page_path: "/seena-apps/vokab/prereg-reward",
        }}
      ></GoogleAnalytics>
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        <section className="mx-auto w-full max-w-2xl space-y-4 bg-white print:space-y-6">
  <h1 className="text-3xl font-bold">Pre-Registration Reward – Terms and Conditions</h1>

  <p className="text-pretty font-mono text-sm text-muted-foreground">
    Effective Date: 7th Dec 2025
  </p>

  <p className="text-pretty font-mono text-sm text-muted-foreground">
    By participating in the Vokab pre-registration reward program, you agree to
    the following Terms and Conditions.
  </p>

  <br />

  <h3 className="text-xl font-bold">1. Eligibility</h3>
  <p className="text-pretty font-mono text-sm text-muted-foreground">
    This reward is available only to users who successfully pre-register for the
    Vokab app through the Google Play Store, and install the app after it becomes
    available. The reward is limited to one
    per user and one per device.
  </p>

  <h3 className="text-xl font-bold">2. Reward Details</h3>
  <p className="text-pretty font-mono text-sm text-muted-foreground">
    Eligible users will receive the following in-app product at no cost:
    <br />
    <strong>Product Name:</strong> Pro
    <br />
    <strong>Product ID:</strong> io.vokab.pro
    <br />
    <strong>Regular Price:</strong> $4.99
    <br />
    <strong>Reward Value:</strong> 1999 Gems
    <br />
    <br />
    This reward has no real-world cash value and cannot be exchanged or
    transferred.
  </p>

  <h3 className="text-xl font-bold">3. How the Reward Is Granted</h3>
  <p className="text-pretty font-mono text-sm text-muted-foreground">
    The reward will be automatically credited after the user installs the app
    from Google Play and completes account setup. Delivery may be delayed due to
    technical reasons.
  </p>

  <h3 className="text-xl font-bold">4. Non-Transferable</h3>
  <p className="text-pretty font-mono text-sm text-muted-foreground">
    The reward is personal to the eligible user and cannot be sold, gifted, or
    transferred.
  </p>

  <h3 className="text-xl font-bold">5. Abuse and Fraud</h3>
  <p className="text-pretty font-mono text-sm text-muted-foreground">
    We reserve the right to revoke the reward if abuse, multiple accounts, bots,
    or manipulation of the offer is detected.
  </p>

  <h3 className="text-xl font-bold">6. Modification or Cancellation</h3>
  <p className="text-pretty font-mono text-sm text-muted-foreground">
    We reserve the right to modify, suspend, or terminate this promotion and
    update these Terms at any time without prior notice.
  </p>

  <h3 className="text-xl font-bold">7. Limitation of Liability</h3>
  <p className="text-pretty font-mono text-sm text-muted-foreground">
    To the maximum extent permitted by law, Vokab is not responsible for
    technical failures, interruptions, or errors related to this promotion.
  </p>

  <h3 className="text-xl font-bold">8. Governing Law</h3>
  <p className="text-pretty font-mono text-sm text-muted-foreground">
    These Terms are governed by the laws of the country where the company
    operating Vokab is registered, without regard to conflict of law principles.
  </p>

  <h3 className="text-xl font-bold">9. Contact</h3>
  <p className="text-pretty font-mono text-sm text-muted-foreground">
    For questions about this promotion:
    <br />
    Email: <a href="mailto:waqasyounis334@gmail.com">waqasyounis334@gmail.com</a>
    <br />
    Website: <a href="https://vokab.pro">Vokab.pro</a>
  </p>
</section>

      </main>
    </>
  );
}
