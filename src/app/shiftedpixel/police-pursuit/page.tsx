import { redirect } from "next/navigation";
import { headers } from "next/headers";
import GoogleAnalytics from "@/components/google-analytics-event";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function PolicePursuit() {
  const userAgent = headers().get("user-agent") || "";
  const googlePackageName = "com.shiftedpixel.police.pursuit";
  // const googlePackageName = "com.androidbull.incognito.browser";
  const appStoreLink =
    "https://apps.apple.com/us/app/police-pursuit-crash-em-all/id6739004227";
  await delay(300); // 300ms delay

  return (
    <>
      <GoogleAnalytics
        eventName="redirected_to_android"
        eventParams={{
          page_title: "Android Redirect",
          page_path: "/shiftedpixel/police-pursuit",
        }}
      />
      {redirect(
        `https://play.google.com/store/apps/details?id=${googlePackageName}`,
      )}
    </>
  );

  // if (/android/i.test(userAgent)) {
  // <GoogleAnalytics
  //   eventName="redirected_to_android"
  //   eventParams={{
  //     page_title: "Android Redirect",
  //     page_path: "/shiftedpixel/police-pursuit",
  //   }}
  // ></GoogleAnalytics>;
  // setTimeout(() => {
  //   window.location.href = `https://play.google.com/store/apps/details?id=${googlePackageName}`;
  //   // redirect(
  //     // `https://play.google.com/store/apps/details?id=${googlePackageName}`,
  //   // );
  // }, 300);
  // } else {
  // redirect(appStoreLink);
  // }

  // return null; // This will not render since the user is redirected
}
