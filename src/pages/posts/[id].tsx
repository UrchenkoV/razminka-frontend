import ErrorPage from "next/error";
import { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import React from "react";

import PostFull from "@/components/Post/PostFull";
import MainLayout from "@/layouts/MainLayout";
import { Api } from "@/utils/api";
import { IPostResponse } from "@/utils/api/types.api";
import { makeTitle } from "@/utils/makeTitle";

const PostFullPage: NextPage<{ post: IPostResponse }> = ({ post }) => {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{makeTitle(post.title)}</title>
      </Head>
      <MainLayout fullWidthConteiner>
        <div className="flex flex-col gap-5">
          <PostFull post={post} />
        </div>
      </MainLayout>
    </>
  );
};

export default PostFullPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const post = await Api().post.byIdWithComments(+ctx.params?.id);
    return {
      props: {
        post,
      },
    };
  } catch (err) {
    console.warn("Full post page.", err);

    return {
      props: {
        post: null,
      },
    };
  }
};
function notFound() {
  throw new Error("Function not implemented.");
}
