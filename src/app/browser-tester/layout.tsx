import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browser Tester - WY",
  description:
    "An online tool to test how sophisticated and secure your browser is.",
};

export default function BrowserTesterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
