import PostFull from "@/components/Post/PostFull";
import PostFullComments from "@/components/Post/PostFullComments";
import MainLayout from "@/layouts/MainLayout";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const NewsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Статья</title>
      </Head>
      <MainLayout fullWidthConteiner>
        <div className="flex flex-col gap-5">
          <PostFull />
          <PostFullComments />
        </div>
      </MainLayout>
    </>
  );
};

export default NewsPage;
