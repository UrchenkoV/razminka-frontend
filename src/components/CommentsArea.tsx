import Image from "next/image";
import Link from "next/link";
import React from "react";

function CommentsArea() {
  const comments = [
    {
      id: 1,
      text: "Стучит по корнизу маленький дождик, птицы скрылись в свои убежища.",
      user: { id: 1, name: "Владислав Юрченко", avatar: "/bird-96.png" },
      post: {
        id: 1,
        title: "Какаой пасмурнуй весенний дождливый день.",
      },
      createdAt: "14.54",
    },
    {
      id: 2,
      text: "Стучит по корнизу маленький дождик, птицы скрылись в свои убежища.",
      user: { id: 1, name: "Владислав Юрченко", avatar: "/bird-96.png" },
      post: {
        id: 1,
        title: "Какаой пасмурнуй весенний дождливый день.",
      },
      createdAt: "15.00",
    },
  ];

  return (
    <div className="pl-4 pr-10 max-w-xs h-full sticky top-14">
      <div className="py-8 text-slate-700 text-lg font-medium">Комментарии</div>
      <ul className="flex flex-col gap-5">
        {comments.map((item) => (
          <li key={item.id} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Link href="#" className="group flex items-center gap-2">
                <div className="">
                  <Image
                    src={item.user.avatar}
                    alt={item.user.name}
                    width={35}
                    height={35}
                  />
                </div>
                <div className="text-base font-bold text-slate-900 group-hover:text-blue-500 duration-300">
                  {item.user.name}
                </div>
              </Link>

              <Link href="#" className="text-sm text-slate-500">
                {item.createdAt}
              </Link>
            </div>

            <div className="text-lg">{item.text}</div>

            <Link
              href="#"
              className="text-base font-bold text-slate-900 hover:text-blue-500 duration-300"
            >
              {item.post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsArea;
