import MainLayout from "@/layouts/MainLayout";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const MessagesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Сообщения</title>
      </Head>
      <MainLayout>
        <div>MessagesPage</div>
      </MainLayout>
    </>
  );
};

export default MessagesPage;
