```
During the build process, your application is being compiled and processed by TypeScript, which performs static analysis of your code. At this stage:
	•	The build process does not execute runtime JavaScript.
	•	The window object (and thus window.gtag) does not exist because there is no browser environment during the build process.

This is why TypeScript throws an error if you reference window.gtag without declaring its type, even though the gtag.js script initializes it at runtime.
```;

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export {};
