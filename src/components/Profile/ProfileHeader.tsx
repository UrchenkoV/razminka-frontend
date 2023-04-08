import React, { FC } from "react";
import BaseButton from "../BaseButton";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";

const ProfileHeader: FC = () => {
  const [activeStatus, setActiveStatus] = React.useState(0);

  const tabs = [
    { title: "Статьи" },
    { title: "Комментарии" },
    { title: "Черновики" },
    { title: "Подробнее" },
  ];

  return (
    <div className="bg-white shadow-sm px-5 pt-5 rounded-xl">
      <div className="flex justify-between">
        <div className="h-20 w-20">
          <img
            src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_5.png"
            alt=""
            className="h-full w-full rounded-full overflow-hidden shadow"
          />
        </div>
        <div className="">
          <Link href={`/profile/settings`}>
            <BaseButton>
              <Cog6ToothIcon className="w-6 h-6 text-slate-700" />
            </BaseButton>
          </Link>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-5 mb-4">Владислав Сергеевич</h2>
      <Link
        href={`#`}
        className="text-blue-500 hover:text-blue-600 duration-300 mb-4 inline-block"
      >
        Изменить описание
      </Link>
      <p className="mb-7 block">На проекте с 3 апр 2023</p>

      <div>
        <div className="flex items-center gap-4">
          {tabs.map((item, i) => (
            <div
              onClick={() => setActiveStatus(i)}
              className={clsx(
                "text-sm cursor-pointer text-slate-700 hover:text-blue-500 duration-300 py-2 px-3 border-b-2 border-b-transparent font-normal",
                activeStatus == i && "border-b !border-b-blue-500"
              )}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
