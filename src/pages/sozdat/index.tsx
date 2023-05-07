import PostCreateForm from "@/components/Post/PostCreateForm";
import MainLayout from "@/layouts/MainLayout";
import { selectUser } from "@/redux/user/userSlice";
import { makeTitle } from "@/utils/makeTitle";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const PostCreatePage: NextPage = () => {
  const router = useRouter();
  const user = useSelector(selectUser);

  React.useEffect(() => {
    if (!user.user) {
      router.push("/");
    }
  }, []);

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
