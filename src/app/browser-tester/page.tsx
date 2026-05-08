"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "browser-tester-config";

interface StoredConfig {
  tabCount: number;
  url: string;
  delay: number;
}

export default function BrowserTesterPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [tabCount, setTabCount] = useState(10);
  const [url, setUrl] = useState("about:blank");
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const config: StoredConfig = JSON.parse(stored);
      setTabCount(config.tabCount);
      setUrl(config.url);
      setDelay(config.delay);
    }
  }, []);

  useEffect(() => {
    const config: StoredConfig = { tabCount, url, delay };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [tabCount, url, delay]);

  const formatUrl = (inputUrl: string): string => {
    const trimmed = inputUrl.trim();
    if (
      trimmed.startsWith("http://") ||
      trimmed.startsWith("https://") ||
      trimmed.startsWith("about:") ||
      trimmed.startsWith("file://")
    ) {
      return trimmed;
    }
    return `https://${trimmed}`;
  };

  const handleOpenTabs = async () => {
    setIsRunning(true);
    const formattedUrl = formatUrl(url);
    for (let i = 0; i < tabCount; i++) {
      window.open(formattedUrl, "_blank");
      if (i < tabCount - 1) {
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
    setIsRunning(false);
    setIsOpen(false);
  };

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Browser Tester</h1>
          <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
            An online tool to test how sophisticated and secure your browser is.
          </p>
        </div>

        <Section>
          <h2 className="text-xl font-bold">Spam Testing</h2>
          <Card className="border border-muted p-4">
            <CardHeader>
              <CardTitle className="text-base">Open Multiple Tabs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-xs text-muted-foreground">
                Test how your browser handles rapid tab opening. Default: 10
                tabs with 1 second delay.
              </p>

              {!isOpen ? (
                <Button onClick={() => setIsOpen(true)} variant="outline">
                  Configure
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium">
                        Number of Tabs
                      </label>
                      <input
                        type="number"
                        value={tabCount}
                        onChange={(e) => setTabCount(Number(e.target.value))}
                        min={1}
                        max={100}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium">URL</label>
                      <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="about:blank"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium">Delay (ms)</label>
                      <input
                        type="number"
                        value={delay}
                        onChange={(e) => setDelay(Number(e.target.value))}
                        min={0}
                        step={100}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleOpenTabs}
                      disabled={isRunning}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {isRunning ? "Opening..." : "Go"}
                    </Button>
                    <Button
                      onClick={() => setIsOpen(false)}
                      variant="outline"
                      disabled={isRunning}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </Section>
      </section>
    </main>
  );
}
