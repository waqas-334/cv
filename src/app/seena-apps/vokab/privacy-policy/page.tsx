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
          <h1 className="text-3xl font-bold">Privacy Policy – Vokab</h1>

          <p className="text-pretty font-mono text-sm text-muted-foreground">
            Effective Date: 7th Dec 2025
          </p>

          <p className="text-pretty font-mono text-sm text-muted-foreground">
            Vokab (“we”, “our”, “us”) respects your privacy and is committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, store, and protect your information when you
            use the Vokab mobile application.
          </p>

          <p className="text-pretty font-mono text-sm text-muted-foreground">
            By using the Vokab app, you agree to the collection and use of
            information in accordance with this Privacy Policy.
          </p>

          <br />

          <h3 className="text-xl font-bold">1. Information We Collect</h3>

          <p className="text-pretty font-mono text-sm text-muted-foreground">
            <strong>a. Personal Information</strong>
            <br />
            When you create an account, we collect your email address and an
            encrypted version of your password.
          </p>

          <p className="text-pretty font-mono text-sm text-muted-foreground">
            <strong>b. User-Generated Content</strong>
            <br />
            We collect and store the words you add, meanings you enter,
            sentences or context you write, and your quiz responses.
          </p>

          <p className="text-pretty font-mono text-sm text-muted-foreground">
            <strong>c. Usage Data</strong>
            <br />
            We may collect non-personal data such as app interactions, device
            type, operating system, and performance logs.
          </p>

          <h3 className="text-xl font-bold">2. How We Use Your Information</h3>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            We use your information to operate and improve the app, save your
            progress, generate personalized quizzes, maintain your streaks,
            secure your account, and prevent abuse. We do not sell or rent your
            personal information.
          </p>

          <h3 className="text-xl font-bold">3. AI-Powered Features</h3>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            Vokab uses AI to analyze quiz results and personalize your learning
            experience by identifying difficult words and adjusting future
            quizzes.
          </p>

          <h3 className="text-xl font-bold">4. Data Storage and Security</h3>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            We use industry-standard security measures, including encryption and
            secure cloud storage, to protect your data. However, no system can
            be guaranteed to be completely secure.
          </p>

          <h3 className="text-xl font-bold">5. Your Rights</h3>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            You can edit or delete your words at any time. You can also request
            deletion of your account and all associated data. When your account
            is deleted, your data is permanently removed from our servers.
          </p>

          <h3 className="text-xl font-bold">6. Third-Party Services</h3>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            We may use trusted third-party services for authentication, cloud
            storage, and analytics. These services are required to protect your
            data.
          </p>

          <h3 className="text-xl font-bold">7. Children’s Privacy</h3>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            Vokab is not intended for children under the age of 13. We do not
            knowingly collect personal data from children.
          </p>

          <h3 className="text-xl font-bold">8. Changes to This Policy</h3>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            We may update this Privacy Policy from time to time. Changes will be
            posted in the app or on our website with an updated effective date.
          </p>

          <h3 className="text-xl font-bold">9. Contact</h3>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            If you have questions about this Privacy Policy, you can contact us:
            <br />
            Email:{" "}
            <a href="mailto:waqasyounis334@gmail.com">
              waqasyounis334@gmail.com
            </a>
            <br />
            Website: <a href="https://vokab.pro">Vokab.pro</a>
          </p>
        </section>
      </main>
    </>
  );
}
