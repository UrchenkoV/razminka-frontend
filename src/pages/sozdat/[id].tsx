import PostCreateForm from "@/components/Post/PostCreateForm";
import MainLayout from "@/layouts/MainLayout";
import { selectUser } from "@/redux/user/userSlice";
import { Api } from "@/utils/api";
import { IPostResponse } from "@/utils/api/types.api";
import { makeTitle } from "@/utils/makeTitle";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const PostUpdatePage: NextPage<{ post: IPostResponse }> = ({ post }) => {
  const router = useRouter();
  const user = useSelector(selectUser);
  console.log(post, "554", user);

  React.useEffect(() => {
    if (post.user.id !== user.user?.id) {
      router.push("/");
    }
  }, []);

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
    console.warn("Get post", err);

    return {
      props: {
        post: null,
      },
    };
  }
};
