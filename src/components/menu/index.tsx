import { TMenu } from "@/common/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  menuList: TMenu[];
}

function Menu({ menuList }: IProps) {
  const pathname = usePathname();

  return (
    <div className="h-full items-center hidden sm:flex">
      {menuList.map((menu, i) => {
        return (
          <Link
            key={i}
            href={menu.url}
            className={`rounded-md px-0 pl-4 sm:px-4 py-2 text-md sm:text-lg md:font-normal
              hover:text-gold ${pathname === menu.url ? "text-gold" : ""}
              `}
          >
            {menu.name}
          </Link>
        );
      })}
    </div>
  );
}
export default Menu;
