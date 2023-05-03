
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, Fragment } from "react";

const MainHeaderProfile: FC = () => {
  const router = useRouter();
  const profileLinks = [{ title: "Настройки", link: `/profile/settings` }];

  return (
    <div className="profile flex items-center gap-1 cursor-pointer">
      <Link href={`/profile/1`}>
        <div className="w-10 h-10 rounded-xl overflow-hidden">
          <img
            src={`https://leonardo.osnova.io/38481965-da22-586c-98ed-62bfcdea1d8e/-/format/webp/`}
            alt={``}
          />
        </div>
      </Link>

      <Menu as="div" className="relative">
        <Menu.Button className="py-2">
          <span className="sr-only">Открыть меню профиля.</span>

          <ChevronDownIcon
            className="h-4 w-4 text-slate-900"
            aria-hidden="true"
          />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-480 w-56 origin-top-right rounded-md bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {profileLinks.map((item) => (
              <Menu.Item key={item.link}>
                {({ active }) => (
                  <Link
                    href={item.link}
                    className={clsx(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700",
                      router.pathname === item.link ? "bg-gray-100" : ""
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MainHeaderProfile;
