import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import React from "react";

const SettingsPage = () => {
  return (
    <>
      <Head>
        <title>Настройки</title>
      </Head>
      <MainLayout>
        <div>SettingsPage</div>
      </MainLayout>
    </>
  );
};

export default SettingsPage;
