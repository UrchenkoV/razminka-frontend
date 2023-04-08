import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import Post from "@/components/Post";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Разминка - блог</title>
      </Head>
      <MainLayout>
        <div className="flex flex-col gap-5">
          <Post />
          <Post />
          <Post />
        </div>
      </MainLayout>
    </>
  );
}
