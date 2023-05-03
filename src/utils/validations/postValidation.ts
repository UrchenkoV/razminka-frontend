import * as yup from "yup";

export const PostCreateSchema = yup.object({
  title: yup
    .string()
    .min(5, "Минимум 5 символов.")
    .required("Напишите название статьи."),
});

export type PostCreateDto = yup.InferType<typeof PostCreateSchema>;
