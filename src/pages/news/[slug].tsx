import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import React from "react";

const NewsPage = () => {
  return (
    <>
      <Head>
        <title>Статьи</title>
      </Head>
      <MainLayout>
        <div>NewsPage</div>
      </MainLayout>
    </>
  );
};

export default NewsPage;
