"use client";
import React, { useState } from "react";
import GoogleAnalytics from "@/components/google-analytics-event";
import HeaderImage from "@/components/ui/header-image";

// import { Avatar } from "@radix-ui/react-avatar";

export default function PrivacyPolicy() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert("Form Submitted. Thanks"); //:D
  };
  return (
    <>
      <GoogleAnalytics
        eventName="support_page_view"
        eventParams={{
          page_title: "Support",
          page_path: "/shiftedpixel/support",
        }}
      ></GoogleAnalytics>
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        <section className="mx-auto w-full max-w-2xl space-y-4 bg-white print:space-y-6">
          <HeaderImage />
          <div className="h-10" />
          <h1 className="text-2xl font-bold">Support</h1>
          <div className="h-2" />
          <form onSubmit={handleSubmit}>
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500"
                  placeholder="John"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="large-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-base text-gray-900 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red-500 dark:focus:ring-red-500"
                rows={3}
                required
              />
            </div>

            <div className="mb-6 flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-red-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-600"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-red-600 hover:underline dark:text-red-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 sm:w-auto dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Submit
            </button>
          </form>
          {/* for padding */}
          <div className="h-20" />
        </section>
      </main>
    </>
  );
}
