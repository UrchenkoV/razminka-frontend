import PostCreateForm from "@/components/Post/PostCreateForm";
import MainLayout from "@/layouts/MainLayout";
import { makeTitle } from "@/utils/makeTitle";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const PostCreatePage: NextPage = () => {
  return (
    <MainLayout hideComments largeWidthConteiner>
      <Head>
        <title>{makeTitle("Написать статью")}</title>
      </Head>
      <div className="bg-white rounded-xl shadow-sm p-5">
        <PostCreateForm />
      </div>
    </MainLayout>
  );
};

export default PostCreatePage;
