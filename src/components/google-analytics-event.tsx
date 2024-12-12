"use client";

import { useEffect } from "react";

//This is used to send custom events to GA

interface GAEventProps {
  eventName: string; // Name of the event
  eventParams?: Record<string, any>; // Additional parameters for the event
}

export default function GoogleAnalytics({
  eventName,
  eventParams,
}: GAEventProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventParams);
    }
  }, [eventName, eventParams]);

  return null; // No UI needed for this component
}
