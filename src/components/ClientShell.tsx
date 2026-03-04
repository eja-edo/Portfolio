"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransitionLoader } from "@/components/PageTransitionLoader";
import { SeasonalEffect } from "@/components/SeasonalEffect";

interface ClientShellProps {
  children: React.ReactNode;
}

export function ClientShell({ children }: ClientShellProps) {
  const pathname = usePathname();

  const isProjectsRoute = pathname === "/projects" || pathname.startsWith("/projects/");

  return (
    <>
      {!isProjectsRoute && <PageTransitionLoader />}
      {!isProjectsRoute && <SeasonalEffect />}
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
