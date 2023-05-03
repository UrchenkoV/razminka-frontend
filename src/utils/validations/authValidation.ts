import * as yup from "yup";

export const LoginFormSchema = yup.object({
  email: yup.string().email("Неверная почта").required("Почта обязательна."),
  password: yup
    .string()
    .min(6, "Минимум 6 символов")
    .required("Пароль обязателен."),
});

export const RegisterFormSchema = yup
  .object()
  .shape({
    fullName: yup.string().required("Имя и фамилия обязательны."),
  })
  .concat(LoginFormSchema);

export type LoginDto = yup.InferType<typeof LoginFormSchema>;

export type CreateUserDto = yup.InferType<typeof RegisterFormSchema>;

export type ValidationErrorType = {
  fullName?: string[];
  email?: string[];
  password?: string[];
};
