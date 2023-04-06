import { getClassNames } from "@/utils/getClassName";
import {
  BookmarkIcon,
  ClockIcon,
  FireIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import React, { FC } from "react";

const MainSidebarMenu: FC = () => {
  const links = [
    {
      title: "Популярное",
      icon: <FireIcon className="w-6 h-6" />,
      active: true,
    },
    {
      title: "Лента",
      icon: <NewspaperIcon className="w-6 h-6" />,
      active: false,
    },
    { title: "Свежее", icon: <ClockIcon className="w-6 h-6" />, active: false },
    {
      title: "Закладки",
      icon: <BookmarkIcon className="w-6 h-6" />,
      active: false,
    },
  ];

  return (
    <ul className="flex flex-col gap-1">
      {links.map((item) => (
        <li
          key={item.title}
          className={getClassNames(
            "flex w-full justify-between  py-2 px-3 rounded-lg text-slate-700  duration-300 cursor-pointer items-center",
            item.active ? "bg-white shadow-sm" : "hover:bg-white"
          )}
        >
          <div
            className={getClassNames(
              "flex items-center gap-2",
              item.active ? "text-blue-500" : ""
            )}
          >
            {item.icon}
            <span className="text-base text-slate-700">{item.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MainSidebarMenu;
