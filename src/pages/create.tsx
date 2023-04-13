import CreateForm from "@/components/pages/Create/CreateForm";
import MainLayout from "@/layouts/MainLayout";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const CreatePage: NextPage = () => {
  return (
    <MainLayout hideComments largeWidthConteiner>
      <Head>
        <title>Создать запись</title>
      </Head>
      <div className="bg-white rounded-xl shadow-sm p-5">
        <CreateForm />
      </div>
    </MainLayout>
  );
};

export default CreatePage;
