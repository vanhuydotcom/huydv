import Image from "next/legacy/image";

import logo from "@/static/images/logo.png";
import { BLUR_IMAGE } from "@/common/constant";
import Link from "next/link";

function Nav() {
  return (
    <nav className="sticky z-sticky inset-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-10 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <Link href={"/"}>
                <Image
                  src={logo.src}
                  alt="Logo HuyDv Portfolio web site"
                  width={32}
                  height={32}
                  quality={100}
                  placeholder="blur"
                  blurDataURL={BLUR_IMAGE}
                  priority
                />
              </Link>
            </div>
            <div className="sm:ml-6">
              <div className="flex">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white rounded-md px-0 pl-4 sm:px-4 py-2 text-sm font-light"
                >
                  Work
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white rounded-md px-0 pl-4 sm:px-4 py-2 text-sm font-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
