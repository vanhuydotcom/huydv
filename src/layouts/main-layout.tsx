"use client";
import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = dynamic(() => import("../components/header"));
const Cubic = dynamic(() => import("../components/cubic"));

function MainLayout({ children }: PropsWithChildren) {
  // register plugin
  if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP);
  }
  return (
    <>
      <Header />
      <div className="max-w-screen-xl h-[calc(100vh-64px)] mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </div>
      <Cubic />
    </>
  );
}

export default MainLayout;
