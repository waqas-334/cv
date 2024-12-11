import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Privacy Policy | SHIFTEDPIXEL`,
  description: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-4 bg-white print:space-y-6">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          Effective Date: 10th Dec 2024
        </p>
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          Welcome to [SHIFTEDPIXEL]. Your privacy is important to us. This
          Privacy Policy explains how we handle and protect the information you
          provide when using all our games.
        </p>
        <br></br>
        <h3 className="text-xl font-bold">Information we collect</h3>
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          We do not collect personal data or require user authentication.
          However, we use{" "}
          <a href="https://firebase.google.com/support/privacy">
            Firebase Analytics
          </a>{" "}
          to collect anonymous data to help us improve our game.
          <br />
          <br />
        </p>
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          <b>This data includes:</b>
        </p>
        <ul className="text-pretty font-mono text-sm text-muted-foreground">
          <li>• Device information (e.g., device type, operating system).</li>{" "}
          <li>
            • Game performance metrics (e.g., crash reports, usage statistics).{" "}
          </li>
          <li>• Non-identifiable usage trends.</li>
        </ul>
        <br />
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          This information cannot be used to identify you personally and is
          solely used to enhance your gaming experience.
        </p>
        <br></br>
        <h3 className="text-xl font-bold">In-App Purchases</h3>
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          Our game includes third-party ads. These ad networks may use
          technologies like cookies to deliver tailored advertisements. We
          recommend reviewing the privacy policies of these ad networks for more
          information about their practices. Following is the list of ad
          networks we use:
          <ul>
            <li>
              • <a href="https://www.applovin.com/privacy/">AppLovin</a>
            </li>

            <li>
              •{" "}
              <a href="https://support.google.com/admob/answer/6128543?hl=en">
                AdMob
              </a>
            </li>

            <li>
              • <a href="https://unity.com/legal/privacy-policy">Unity Ads</a>
            </li>
          </ul>
        </p>
        <br></br>
        <h3 className="text-xl font-bold">How We Use Collected Data</h3>
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          The anonymous data we collect is used to:
          <ul>
            <li>• Improve game functionality and performance.</li>
            <li>• Identify and fix bugs or crashes.</li>
            <li>• Analyze gameplay trends to enhance the user experience.</li>
          </ul>
        </p>
        <br></br>
        <h3 className="text-xl font-bold">Third-Party Services</h3>
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          We use the following third-party services in our game:
          <ol>
            <li>• Improve game functionality and performance.</li>
            <li>• Identify and fix bugs or crashes.</li>
            <li>• Analyze gameplay trends to enhance the user experience.</li>
          </ol>
        </p>
        <br></br>
        <h3 className="text-xl font-bold">Children’s Privacy</h3>
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          Our game is intended for general audiences and does not knowingly
          collect personal data from children. If you believe your child has
          provided personal information, please contact us, and we will promptly
          delete it.
        </p>
        <br></br>
        <h3 className="text-xl font-bold">Your Consent</h3>
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          By playing our game, you consent to this Privacy Policy and the use of
          anonymous data as described.
        </p>
        <br></br>
        <h3 className="text-xl font-bold">Changes to This Policy</h3>
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page, and we encourage you to review it
          periodically.
        </p>
        <br></br>
        <h3 className="text-xl font-bold">Contact Us</h3>
        <p className="text-pretty font-mono text-sm text-muted-foreground">
          If you have any questions about this Privacy Policy, please contact us
          at:
          <br />
          <br />
          Email:{" "}
          <a href="mailto:waqasyounis334+shiftedpixel@gmail.com">
            waqasyounis334+shiftedpixel@gmail.com
          </a>
          <br />
          Website:
          <a href="https://waqasyounis.com/shifted-pixel">ShiftedPixel</a>
          <br />
          <br />
          Thank you!
        </p>
      </section>
    </main>
  );
}
