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
  //
  return (
    <>
      <Header />
      <main className="max-w-screen-xl h-[calc(100vh-56px)] my-2 sm:my-4 mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Cubic />
    </>
  );
}

export default MainLayout;
