import { TMenu } from "@/common/types";
import Link from "next/link";

interface IProps {
  menuList: TMenu[];
}

function Menu({ menuList }: IProps) {
  return (
    <div className="h-full items-center hidden sm:flex">
      {menuList.map((menu, i) => {
        return (
          <Link
            key={i}
            href={menu.url}
            className="text-gray-300 hover:text-white rounded-md px-0 pl-4 sm:px-4 py-2 text-sm md:text-md md:font-normal"
          >
            {menu.name}
          </Link>
        );
      })}
    </div>
  );
}
export default Menu;
