import PostCreateForm from "@/components/Post/PostCreateForm";
import MainLayout from "@/layouts/MainLayout";
import { Api } from "@/utils/api";
import { IPostResponse } from "@/utils/api/types.api";
import { makeTitle } from "@/utils/makeTitle";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";

const PostUpdatePage: NextPage<{ post: IPostResponse }> = ({ post }) => {
  return (
    <MainLayout hideComments largeWidthConteiner>
      <Head>
        <title>{makeTitle("Редактировать статью")}</title>
      </Head>
      <div className="bg-white rounded-xl shadow-sm p-5">
        <PostCreateForm post={post} />
      </div>
    </MainLayout>
  );
};

export default PostUpdatePage;

export const getServerSideProps = async (ctx: GetServerSideProps) => {
  try {
    const post = await Api().post.byId(ctx.params.id);

    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.error("Get post", err);
    return {
      props: {
        post: null,
      },
    };
  }
};
