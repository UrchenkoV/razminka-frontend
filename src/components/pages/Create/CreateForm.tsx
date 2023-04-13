import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const CreateEditor = dynamic(() => import("./CreateEditor"), { ssr: false });

const CreateForm: FC = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState(null);
  console.log(title, null);

  return (
    <div className="flex flex-col gap-5">
      <div className="mx-auto max-w-[650px] w-full">
        <BaseInput
          value={title}
          valueOnChange={(val) => setTitle(val)}
          placeholder="Заголовок"
          className="sm:text-3xl shadow-none border-transparent"
        />
      </div>

      <CreateEditor />

      <div className="mx-auto max-w-[650px] w-full">
        <BaseButton title="Опубликовать" type="blue" />
      </div>
    </div>
  );
};

export default CreateForm;
