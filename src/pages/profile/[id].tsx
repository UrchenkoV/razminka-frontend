import BaseButton from "@/components/BaseButton";
import ProfileHeader from "@/components/Profile/ProfileHeader";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>Имя пользователя</title>
      </Head>
      <MainLayout hideComments fullWidthConteiner>
        <div>
          <ProfileHeader />

          <div className="grid grid-cols-3 justify-between gap-5 mt-8">
            <div className="col-span-2">
              <div className="p-5 py-14 text-center bg-white rounded-xl shadow-sm">
                <div className="text-slate-700 mb-4">
                  Напишите первую статью, чтобы привлечь читателей в ваш блог
                </div>
                <BaseButton title="Написать статью" />
              </div>
            </div>

            <div className="col-span-1">
              <div className="p-5 bg-white mb-5 rounded-xl shadow-sm">
                <div className="font-bold text-slate-700 mb-5">Подписчики</div>
                <div className="">У вас нет ещё подписчиков</div>
              </div>

              <div className="p-5 bg-white rounded-xl shadow-sm">
                <div className="font-bold text-slate-700 mb-5">Подписки</div>
                <Link
                  href={`#`}
                  className="text-blue-500 hover:text-blue-700 duration-300"
                >
                  Настроить ленту
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ProfilePage;
