import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import Link from "next/link";
import Image from "next/image";

const Post = () => {
  return (
    <div className="bg-white shadow-sm rounded-xl py-5 flex flex-col gap-2">
      <PostHeader />
      <Link href={"#"}>
        <div className="flex flex-col gap-3">
          <div className="px-5">
            <div className="text-slate-800 text-2xl font-bold mb-2">
              А вы что, и считать за меня будете?!{" "}
            </div>
            <div className="flex flex-col gap-5">
              <p>
                Вот удивился бы Вовка, столкнувшись в лесу Тридевятого царства с
                нашей ML-системой.{" "}
              </p>
            </div>
          </div>

          <figure>
            <img
              src={
                "https://leonardo.osnova.io/139d2244-20b5-5545-8aed-8a321a057029/-/preview/700/-/format/webp/"
              }
              alt="111"
              width={640}
              height={400}
            />
          </figure>
        </div>
      </Link>

      <PostFooter />
    </div>
  );
};

export default Post;
