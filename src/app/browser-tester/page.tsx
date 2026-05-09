"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "browser-tester-config";
const STORAGE_KEY_VIA_BUTTON = "browser-tester-config-via-button";
const STORAGE_KEY_SINGLE_TAB = "browser-tester-single-tab-url";

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

  // State for "via Button" method
  const [isOpenViaButton, setIsOpenViaButton] = useState(false);
  const [tabCountViaButton, setTabCountViaButton] = useState(10);
  const [urlViaButton, setUrlViaButton] = useState("about:blank");
  const [delayViaButton, setDelayViaButton] = useState(0);
  const [isRunningViaButton, setIsRunningViaButton] = useState(false);

  // State for "Open Single Tab" method
  const [singleTabUrl, setSingleTabUrl] = useState("about:blank");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const config: StoredConfig = JSON.parse(stored);
      setTabCount(config.tabCount);
      setUrl(config.url);
      setDelay(config.delay);
    }
    const storedViaButton = localStorage.getItem(STORAGE_KEY_VIA_BUTTON);
    if (storedViaButton) {
      const config: StoredConfig = JSON.parse(storedViaButton);
      setTabCountViaButton(config.tabCount);
      setUrlViaButton(config.url);
      setDelayViaButton(config.delay);
    }
    const storedSingleTab = localStorage.getItem(STORAGE_KEY_SINGLE_TAB);
    if (storedSingleTab) {
      setSingleTabUrl(storedSingleTab);
    }
  }, []);

  useEffect(() => {
    const config: StoredConfig = { tabCount, url, delay };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  }, [tabCount, url, delay]);

  useEffect(() => {
    const config: StoredConfig = {
      tabCount: tabCountViaButton,
      url: urlViaButton,
      delay: delayViaButton,
    };
    localStorage.setItem(STORAGE_KEY_VIA_BUTTON, JSON.stringify(config));
  }, [tabCountViaButton, urlViaButton, delayViaButton]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SINGLE_TAB, singleTabUrl);
  }, [singleTabUrl]);

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
                Test how your browser handles rapid tab opening using{" "}
                <code className="rounded bg-muted px-1 py-0.5">
                  window.open()
                </code>{" "}
                API. Default: 10 tabs with 1 second delay.
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
                        onFocus={(e) => e.target.select()}
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
                        onFocus={(e) => e.target.select()}
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
                        onFocus={(e) => e.target.select()}
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

          <Card className="border border-muted p-4">
            <CardHeader>
              <CardTitle className="text-base">
                Open Multiple Tabs - via Button
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-xs text-muted-foreground">
                Opens all tabs in a synchronous loop triggered by a direct user
                gesture (button click). Tests if the browser allows{" "}
                <code className="rounded bg-muted px-1 py-0.5">
                  window.open()
                </code>{" "}
                when called within a trusted click event.
              </p>

              {!isOpenViaButton ? (
                <Button
                  onClick={() => setIsOpenViaButton(true)}
                  variant="outline"
                >
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
                        value={tabCountViaButton}
                        onChange={(e) =>
                          setTabCountViaButton(Number(e.target.value))
                        }
                        onFocus={(e) => e.target.select()}
                        min={1}
                        max={100}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium">URL</label>
                      <input
                        type="text"
                        value={urlViaButton}
                        onChange={(e) => setUrlViaButton(e.target.value)}
                        onFocus={(e) => e.target.select()}
                        placeholder="about:blank"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium">Delay (ms)</label>
                      <input
                        type="number"
                        value={delayViaButton}
                        onChange={(e) =>
                          setDelayViaButton(Number(e.target.value))
                        }
                        onFocus={(e) => e.target.select()}
                        min={0}
                        step={100}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={async () => {
                        setIsRunningViaButton(true);
                        const formattedUrl = formatUrl(urlViaButton);
                        for (let i = 0; i < tabCountViaButton; i++) {
                          window.open(formattedUrl, "_blank");
                          if (delayViaButton > 0 && i < tabCountViaButton - 1) {
                            await new Promise((resolve) =>
                              setTimeout(resolve, delayViaButton)
                            );
                          }
                        }
                        setIsRunningViaButton(false);
                        setIsOpenViaButton(false);
                      }}
                      disabled={isRunningViaButton}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {isRunningViaButton ? "Opening..." : "Go"}
                    </Button>
                    <Button
                      onClick={() => setIsOpenViaButton(false)}
                      variant="outline"
                      disabled={isRunningViaButton}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border border-muted p-4">
            <CardHeader>
              <CardTitle className="text-base">Open Single Tab</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-xs text-muted-foreground">
                Opens a single URL in a new tab using{" "}
                <code className="rounded bg-muted px-1 py-0.5">
                  window.open()
                </code>
                . Tests basic popup/tab opening behavior.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={singleTabUrl}
                  onChange={(e) => setSingleTabUrl(e.target.value)}
                  onFocus={(e) => e.target.select()}
                  placeholder="about:blank"
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <Button
                  onClick={() => {
                    window.open(formatUrl(singleTabUrl), "_blank");
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Open
                </Button>
              </div>
            </CardContent>
          </Card>
        </Section>
      </section>
    </main>
  );
}
