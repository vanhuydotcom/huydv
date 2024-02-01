import { PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import Laptop from "../laptop";

const Nav = dynamic(() => import("../nav"));

function BasicLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Nav />
      <div className="max-w-screen-lg mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
        {children}
      </div>
      <Laptop />
    </>
  );
}

export default BasicLayout;
