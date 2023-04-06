import React from "react";
import MainSidebarMenu from "./MainSidebarMenu";

const MainSidebar: React.FC = () => {
  return (
    <div className="w-56 h-[calc(100vh-56px)] top-14 sm:sticky flex-col justify-between hidden sm:flex z-10">
      <div className="px-2 py-4">
        <MainSidebarMenu />
      </div>
    </div>
  );
};

export default MainSidebar;
