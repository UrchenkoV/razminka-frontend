import CommentsArea from "@/components/CommentsArea";
import MainHeader from "@/components/MainHeader";
import MainSidebar from "@/components/MainSidebar";
import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";

interface IMainLayout {
  hideComments?: boolean;
  fullWidthConteiner?: boolean;
  largeWidthConteiner?: boolean;
  className?: string;
}

const MainLayout: FC<PropsWithChildren<IMainLayout>> = ({
  hideComments,
  fullWidthConteiner,
  largeWidthConteiner,
  className,
  children,
}) => {
  return (
    <div className="bg-gray-50">
      <MainHeader />

      <div className="flex justify-between">
        <MainSidebar />

        <div
          className={clsx(
            "px-4 my-8 w-full",
            largeWidthConteiner
              ? "max-w-5xl mx-auto"
              : fullWidthConteiner
              ? ""
              : "max-w-2xl",
            className
          )}
        >
          {children}
        </div>

        {!hideComments && <CommentsArea />}
      </div>
    </div>
  );
};

export default MainLayout;
