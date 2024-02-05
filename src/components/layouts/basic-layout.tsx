"use client";
import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import Cube from "../cube";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = dynamic(() => import("../nav"));

function BasicLayout({ children }: PropsWithChildren) {
  // register plugin
  if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP);
  }

  return (
    <div className="min-h-screen">
      <Nav />
      <div className="max-w-screen-lg mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
        {children}
      </div>
      <Cube />
    </div>
  );
}

export default BasicLayout;
