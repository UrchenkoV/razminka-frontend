import React, { FC } from "react";
import BaseCategoryLink from "../BaseCategoryLink";
import PostAuthor from "./PostAuthor";
import BaseActionWithIcon from "../BaseActionWithIcon";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import PostActions from "./PostActions";
import BaseButton from "../BaseButton";

const PostFull: FC = () => {
  return (
    <div className="bg-white py-5 rounded-xl shadow-sm">
      <div className="wrapper-sm flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <BaseCategoryLink
              title={"Финансы"}
              href={"#"}
              image={
                "https://leonardo.osnova.io/39487063-8f15-5633-9230-bff3c060ac29/-/format/webp/"
              }
            />
            <PostAuthor fullName={"Владислав Юрченко"} href={`/profile/1`} />
            <div className="text-gray-500 text-sm">15.53</div>
          </div>
        </div>

        <h1 className="text-2xl font-bold">
          Рост нефти, обвал рубля, а также волнения по поводу ИИ в разных частях
          мира
        </h1>
        <div>
          Все самые важные и интересные финансовые новости в России и мире за
          неделю: канадские инвесторы этично вложились в порнушку, Samsung
          разболтал свои секреты чатботу, европейцы хотят запретить ChatGPT, а в
          России пилят нейрожириновского.
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <BaseActionWithIcon count={11}>
              <ChatBubbleOvalLeftIcon className="w-5 h-5" />
            </BaseActionWithIcon>
            <BaseActionWithIcon title="В закладки">
              <BookmarkIcon className="w-5 h-5" />
            </BaseActionWithIcon>
          </div>
          <div className="text-gray-500 text-sm">{522} просмотров</div>
        </div>
      </div>

      <div className="w-ful flex justify-center my-5">
        <img
          src="https://leonardo.osnova.io/a03cc87b-173a-5a82-9832-0fdce72d77ea/"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-5 wrapper-sm">
        <div>
          Все самые важные и интересные финансовые новости в России и мире за
          неделю: канадские инвесторы этично вложились, Samsung разболтал свои
          секреты чатботу, европейцы хотят запретить ChatGPT, а в России пилят
          нейрожириновского.
        </div>
      </div>

      <div className="flex flex-col gap-5 wrapper-sm mt-5">
        <PostActions />

        <div className="flex justify-between gap-5 items-center">
          <PostAuthor
            fullName={"Владислав Юрченко"}
            href={`#`}
            avatarUrl={
              "https://leonardo.osnova.io/4bf03cac-ab5b-1e27-988a-f3de01f14a4a/-/scale_crop/108x108/-/format/webp/"
            }
            fullInfo
            description={"Пишу интересно про финансы"}
          />
          <div className="">
            <BaseButton type="blue">
              <div className="flex items-center gap-1.5">
                <UserPlusIcon className="w-6 h-6" /> Подписаться
              </div>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFull;
