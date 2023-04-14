import { getClassNames } from "@/utils/getClassName";
import {
  QueueListIcon,
  FireIcon,
  NewspaperIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

const links = [
  {
    title: "Лента",
    icon: <NewspaperIcon className="w-6 h-6" />,
    link: "/",
  },
  {
    title: "Популярное",
    icon: <FireIcon className="w-6 h-6" />,
    link: "/rating",
  },

  {
    title: "Сообщения",
    icon: <EnvelopeIcon className="w-6 h-6" />,
    link: "/messages",
  },
  {
    title: "Подписки",
    icon: <QueueListIcon className="w-6 h-6" />,
    link: "/follows",
  },
];

const MainSidebarMenu: FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-1">
      {links.map((item) => (
        <Link
          href={item.link}
          key={item.title}
          className={getClassNames(
            "flex w-full justify-between  py-2 px-3 rounded-lg text-gray-700  duration-300 items-center",
            router.pathname === item.link
              ? "bg-white shadow-sm"
              : "hover:bg-white"
          )}
        >
          <>
            <div
              className={getClassNames(
                "flex items-center gap-2",
                router.pathname === item.link ? "text-blue-500" : ""
              )}
            >
              {item.icon}
              <span className="text-base text-gray-700">{item.title}</span>
            </div>
          </>
        </Link>
      ))}
    </div>
  );
};

export default MainSidebarMenu;
