import BaseButton from "@/components/BaseButton";
import BaseInput from "@/components/BaseInput";
import { Api } from "@/utils/api";
import { IPostResponse } from "@/utils/api/types.api";
import {
  PostCreateDto,
  PostCreateSchema,
} from "@/utils/validations/postValidation";
import { OutputData } from "@editorjs/editorjs";
import { yupResolver } from "@hookform/resolvers/yup";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

const PostEditor = dynamic(() => import("./PostEditor"), {
  ssr: false,
});

const PostCreateForm: FC<{ post?: IPostResponse }> = ({ post }) => {
  const router = useRouter();

  const [title, setTitle] = React.useState(post?.title || "");
  const [blocks, setBlocks] = React.useState<OutputData["blocks"]>(
    post?.text || []
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PostCreateDto>({
    mode: "onChange",
    resolver: yupResolver(PostCreateSchema),
  });

  console.log(blocks, errors, isValid, post);

  const onSavePost = async (data: PostCreateDto) => {
    console.log(data);
    try {
      if (post) {
        await Api().post.update(post.id, {
          title: data.title,
          text: blocks,
        });
      } else {
        const post = await Api().post.create({
          title: data.title,
          text: blocks,
        });

        router.push(`/sozdat/${post.id}`);
      }
    } catch (err) {
      console.error("Post create", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSavePost)} className="flex flex-col gap-5">
      <div className="mx-auto max-w-[650px] w-full">
        <BaseInput
          value={title}
          onChangeText={(val) => setTitle(val)}
          placeholder="Заголовок"
          className="sm:!text-xl !shadow-none border-transparent"
          {...register("title")}
          isError={Boolean(errors.title?.message)}
          helperMessage={errors.title?.message}
        />
      </div>

      <PostEditor initialBlocks={blocks} onChange={(arr) => setBlocks(arr)} />

      <div className="mx-auto max-w-[650px] w-full">
        <BaseButton
          type="submit"
          title={post ? "Сохранить" : "Опубликовать"}
          color="blue"
          disabled={!isValid || !blocks.length || isSubmitting}
        />
      </div>
    </form>
  );
};

export default PostCreateForm;
