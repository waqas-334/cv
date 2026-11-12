import React from "react";
import { Metadata } from "next";
import GoogleAnalytics from "@/components/google-analytics-event";

export const metadata: Metadata = {
  title: "Terms of Service | Calculator Photo Vault",
  description: "Terms of Service for the Calculator Photo Vault Android app",
};

const textClass = "text-pretty font-mono text-sm text-muted-foreground";
const linkClass = "underline underline-offset-2";

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-4 text-xl font-bold">{children}</h3>;
}

function List({ children }: { children: React.ReactNode }) {
  return (
    <ul className={`${textClass} list-disc space-y-2 pl-5`}>{children}</ul>
  );
}

export default function VaultTermsOfService() {
  return (
    <>
      <GoogleAnalytics
        eventName="page_view_custom"
        eventParams={{
          page_title: "Vault Terms of Service",
          page_path: "/vault-terms-of-service",
        }}
      ></GoogleAnalytics>
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        <section className="mx-auto w-full max-w-2xl space-y-4 bg-white print:space-y-6">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
          <p className={textClass}>
            <b>Calculator Photo Vault</b> (free and Pro editions)
          </p>
          <p className={textClass}>Effective date: November 12, 2026</p>
          <p className={textClass}>
            These Terms of Service (&quot;Terms&quot;) govern your use of the
            Calculator Photo Vault Android app, including the Pro edition
            (together, the &quot;App&quot;), published by Waqas Younis
            (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By downloading,
            installing or using the App, you agree to these Terms. If you do not
            agree, do not use the App.
          </p>

          <Heading>1. What the App does</Heading>
          <p className={textClass}>
            The App lets you keep photos, videos, audio, documents, notes and
            contacts in a private area on your device, behind a working
            calculator and a passcode. It also offers optional features such as
            fingerprint unlock, intruder photos, app hiding through a custom
            home-screen launcher, and alternative app icons.
          </p>

          <Heading>2. Eligibility</Heading>
          <p className={textClass}>
            You must be at least 13 years old, or the minimum age required in
            your country to use apps like this one without parental consent. If
            you are under 18, you confirm that a parent or guardian has agreed
            to these Terms on your behalf.
          </p>

          <Heading>3. Your content stays on your device</Heading>
          <List>
            <li>
              Files you add to the vault are moved into the App&apos;s private
              storage <b>on your device</b>. They are hidden from other apps and
              the gallery, but they are <b>not encrypted</b> and are{" "}
              <b>not uploaded to any server</b>.
            </li>
            <li>
              <b>
                Uninstalling the App or clearing its data permanently deletes
                everything in the vault.
              </b>{" "}
              Restore files to your device before uninstalling, changing phones
              or resetting your device.
            </li>
            <li>
              The App does not currently offer cloud backup of vault content.
              You are responsible for keeping your own backups of anything
              important.
            </li>
            <li>
              Anyone who has your passcode, or full access to a rooted or
              modified device, may be able to see your vault content.
            </li>
          </List>

          <Heading>4. Passcode and account recovery</Heading>
          <List>
            <li>
              You are responsible for keeping your passcode, security answer and
              device secure.
            </li>
            <li>
              If you add a recovery email, the App stores your email address,
              passcode, chosen security question and answer on our cloud service
              (Google Firebase) so that you can recover access if you forget
              your passcode. See our{" "}
              <a
                className={linkClass}
                href="https://tictactoe-brain-games.blogspot.com/2020/06/calculator-photo-vault-privacy-policy.html"
              >
                Privacy Policy
              </a>{" "}
              for how this information is handled.
            </li>
            <li>
              If you skip the recovery email and forget your passcode, we may
              not be able to help you regain access.
            </li>
          </List>

          <Heading>5. Acceptable use</Heading>
          <p className={textClass}>You agree not to use the App to:</p>
          <List>
            <li>
              store, hide or share content that is illegal, including content
              that exploits or harms minors;
            </li>
            <li>infringe anyone&apos;s copyright, privacy or other rights;</li>
            <li>
              monitor, photograph or hide information from another person
              without their consent where the law requires it;
            </li>
            <li>
              reverse engineer, modify, resell or redistribute the App, except
              where the law allows it.
            </li>
          </List>
          <p className={textClass}>
            You are solely responsible for the content you store in the App.
          </p>

          <Heading>6. Intruder photos</Heading>
          <p className={textClass}>
            When intruder photos are turned on, the App uses the front camera to
            take a photo when someone enters a wrong passcode. The photo is
            stored only on your device. You are responsible for using this
            feature in line with the laws where you live, including any laws
            about photographing other people.
          </p>

          <Heading>7. Premium features, subscriptions and payments</Heading>
          <List>
            <li>
              Some features (for example, an ad-free experience, app hiding and
              changing the app icon) require <b>Premium</b>. Premium is
              available as:
              <ul className="mt-2 list-[circle] space-y-2 pl-5">
                <li>
                  a <b>monthly subscription</b>, which may include a{" "}
                  <b>free trial</b> (currently 1 week) for eligible new
                  subscribers, and
                </li>
                <li>
                  a <b>lifetime</b> one-time purchase.
                </li>
              </ul>
            </li>
            <li>
              All purchases are processed by <b>Google Play</b>. Prices are
              shown in the App and on Google Play before you buy and may vary by
              country.
            </li>
            <li>
              <b>Subscriptions renew automatically</b> at the end of each
              billing period, and at the end of the free trial, unless you
              cancel at least 24 hours before renewal. You can cancel any time
              in Google Play → Payments &amp; subscriptions → Subscriptions.
              Cancelling stops future charges; you keep Premium until the end of
              the period you already paid for.
            </li>
            <li>
              Refunds are handled under{" "}
              <a
                className={linkClass}
                href="https://support.google.com/googleplay/answer/2479637"
              >
                Google Play&apos;s refund policy
              </a>
              .
            </li>
            <li>
              Features marked &quot;Coming Soon&quot; are not part of a purchase
              until they are released, and their release is not guaranteed.
            </li>
            <li>
              The Pro edition is a separate app that includes Premium features
              with its purchase on Google Play.
            </li>
          </List>

          <Heading>8. Ads</Heading>
          <p className={textClass}>
            The free edition shows ads served by Google AdMob. Ads are removed
            for Premium users and in the Pro edition.
          </p>

          <Heading>9. Changes to the App</Heading>
          <p className={textClass}>
            We may add, change or remove features, or stop offering the App, at
            any time. We will try to give notice of major changes that affect
            paid features.
          </p>

          <Heading>10. Disclaimer</Heading>
          <p className={textClass}>
            The App is provided{" "}
            <b>&quot;as is&quot; and &quot;as available&quot;</b>, without
            warranties of any kind, express or implied, including fitness for a
            particular purpose and non-infringement. We do not guarantee that
            the App will be error-free or uninterrupted, or that content stored
            in it will never be lost.
          </p>

          <Heading>11. Limitation of liability</Heading>
          <p className={textClass}>
            To the fullest extent permitted by law, we are not liable for any
            indirect, incidental, special or consequential damages, or for any
            loss of data, files, photos, profits or goodwill, arising from your
            use of, or inability to use, the App. Our total liability for any
            claim is limited to the amount you paid us for the App in the 12
            months before the claim. Some jurisdictions do not allow these
            limitations, so they may not apply to you.
          </p>

          <Heading>12. Termination</Heading>
          <p className={textClass}>
            You can stop using the App at any time by uninstalling it (remember
            that this deletes your vault content). We may suspend or end your
            access if you break these Terms.
          </p>

          <Heading>13. Changes to these Terms</Heading>
          <p className={textClass}>
            We may update these Terms from time to time. We will post the new
            version at this address and update the effective date above.
            Continuing to use the App after a change means you accept the
            updated Terms.
          </p>

          <Heading>14. Governing law</Heading>
          <p className={textClass}>
            These Terms are governed by the laws of the Province of Newfoundland
            and Labrador and the federal laws of Canada that apply there,
            without regard to conflict-of-law rules. This does not take away any
            consumer protection rights you have under the laws of the country
            where you live.
          </p>

          <Heading>15. Contact</Heading>
          <p className={textClass}>
            Questions about these Terms:{" "}
            <a className={linkClass} href="mailto:shiftedpixel056@gmail.com">
              <b>shiftedpixel056@gmail.com</b>
            </a>{" "}
            ·{" "}
            <a className={linkClass} href="https://waqasyounis.com">
              waqasyounis.com
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
