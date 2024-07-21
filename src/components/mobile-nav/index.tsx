"use client";

import { mainMenu } from "@/common";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="sm:hidden h-8 w-8"
      >
        <Bars3Icon />
      </button>
      <Transition appear show={navShow} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={onToggleNav}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full opacity-0"
                enterTo="translate-x-0 opacity-95"
                leave="transition ease-in duration-200 transform"
                leaveFrom="translate-x-0 opacity-95"
                leaveTo="translate-x-full opacity-0"
              >
                <Dialog.Panel className="fixed left-0 top-0 z-10 h-full w-full duration-300 bg-gradient-to-b from-jet to-raisin-black">
                  <nav className="fixed mt-8 h-full text-left">
                    {mainMenu.map((menu, i) => (
                      <div key={i} className="px-12 py-4">
                        <Link
                          href={menu.url}
                          className="text-2xl font-bold tracking-widest text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                          onClick={onToggleNav}
                        >
                          {menu.name}
                        </Link>
                      </div>
                    ))}
                  </nav>

                  <div className="flex justify-end">
                    <button
                      className="mr-8 mt-11 h-8 w-8"
                      aria-label="Toggle Menu"
                      onClick={onToggleNav}
                    >
                      <XMarkIcon />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileNav;
