import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import { Api } from "@/utils/api";
import { NextPage } from "next";
import { makeTitle } from "@/utils/makeTitle";
import PostItem from "@/components/Post";
import { IPostResponse } from "@/utils/api/types.api";

interface IHomePage {
  posts: IPostResponse[];
}

const HomePage: NextPage<IHomePage> = ({ posts = [] }) => {
  return (
    <>
      <Head>
        <title>{makeTitle("Разминка - блог", false)}</title>
      </Head>
      <MainLayout>
        <div className="flex flex-col gap-5">
          {posts.map((obj) => (
            <PostItem key={obj.id} {...obj} />
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const posts = await Api().post.getAll();
    return {
      props: {
        posts,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default HomePage;
