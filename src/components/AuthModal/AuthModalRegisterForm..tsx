import React, { FC } from "react";
import BaseInput from "../BaseInput";
import BaseButton from "../BaseButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IRegisterFormSchema,
  RegisterFormSchema,
} from "@/utils/validations/authValidation";

const AuthModalRegisterForm: FC = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRegisterFormSchema>({
    mode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });

  console.log(errors, "errors", isValid);

  const onSubmit = (data: IRegisterFormSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <BaseInput
        value={fullName}
        onChangeText={setFullName}
        placeholder="Имя и фамилия"
        {...register("fullName")}
        isError={Boolean(errors.fullName?.message)}
        helperMessage={errors.fullName?.message}
      />
      <BaseInput
        value={email}
        onChangeText={setEmail}
        placeholder="Почта"
        {...register("email")}
        isError={Boolean(errors.email?.message)}
        helperMessage={errors.email?.message}
      />
      <BaseInput
        value={password}
        onChangeText={setPassword}
        placeholder="Пароль"
        {...register("password")}
        isError={Boolean(errors.password?.message)}
        helperMessage={errors.password?.message}
      />
      <BaseButton
        type="submit"
        title="Войти"
        color="blue"
        disabled={!isValid}
      />
    </form>
  );
};

export default AuthModalRegisterForm;
