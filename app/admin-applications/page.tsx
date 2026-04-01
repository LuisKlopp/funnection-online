import type { Metadata } from "next";

import { AdminApplicationsPageClient } from "./AdminApplicationsPageClient";

export const metadata: Metadata = {
  title: "Admin Applications",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
      nosnippet: true,
    },
  },
};

export default function AdminApplications() {
  return (
    <div className="mx-auto min-h-svh w-full bg-linear-to-b from-slate-50 via-white to-emerald-50/30">
      <AdminApplicationsPageClient />
    </div>
  );
}
