import Image from "next/legacy/image";

import Link from "next/link";
import dynamic from "next/dynamic";
import { mainMenu } from "@/common/constant";

const Menu = dynamic(() => import("../menu"));
const MobileNav = dynamic(() => import("../mobile-nav"));

function Header() {
  const logo = "/logo.png";
  return (
    <nav
      className="sticky z-[999] inset-4 min-h-14 h-14 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8
     bg-jet drop-shadow-md rounded-lg"
    >
      <div className="relative flex flex-1 items-center justify-between sm:items-stretch">
        <div className="flex flex-shrink-0 items-center">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Logo HuyDv Portfolio web site"
              width={48}
              height={48}
              quality={100}
              priority
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Link>
        </div>
        <div className="sm:ml-6">
          <Menu menuList={mainMenu} />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

export default Header;
