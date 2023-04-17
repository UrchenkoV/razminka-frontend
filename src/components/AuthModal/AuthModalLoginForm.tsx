import React, { FC } from "react";
import BaseInput from "../BaseInput";
import BaseButton from "../BaseButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LoginFormSchema,
  TLoginFormSchema,
} from "@/utils/validations/authValidation";

const AuthModalLoginForm: FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TLoginFormSchema>({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });
  console.log(errors, "errors", isValid);

  const onSubmit = (data: TLoginFormSchema) => {
    console.log(data, "data");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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

export default AuthModalLoginForm;
