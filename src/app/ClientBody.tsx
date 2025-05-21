"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Add any client-side initialization here
  }, []);

  return (
    <body className="min-h-screen font-jakarta antialiased">
      {children}
    </body>
  );
}
