import MainLayout from "@/layouts/MainLayout";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const FollowsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Подписки</title>
      </Head>
      <MainLayout>
        <div>FollowsPage</div>
      </MainLayout>
    </>
  );
};

export default FollowsPage;
