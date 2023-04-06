import CommentsArea from "@/components/CommentsArea";
import MainHeader from "@/components/MainHeader";
import MainSidebar from "@/components/MainSidebar";
import React, { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-gray-50">
      <MainHeader />

      <div className="flex justify-between">
        <MainSidebar />

        <div className="px-4">{children}</div>

        <CommentsArea />
      </div>
    </div>
  );
};

export default MainLayout;
