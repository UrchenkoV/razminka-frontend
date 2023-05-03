import React, { FC } from "react";
import BaseInput from "../BaseInput";
import BaseButton from "../BaseButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CreateUserDto,
  RegisterFormSchema,
} from "@/utils/validations/authValidation";
import BaseAlert from "../BaseAlert";
import { setCookie } from "nookies";
import { Api } from "@/utils/api";

const AuthModalRegisterForm: FC = () => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [validErrors, setValidErrors] = React.useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<CreateUserDto>({
    mode: "onChange",
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    console.log(dto);
    try {
      setErrorMessage("");
      setValidErrors([]);

      const data = await Api().user.register(dto);
      console.log(data);
      setCookie(null, "accessToken", data.accessToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } catch (err: any) {
      console.warn(err, "Ошибка при регистрации.");

      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
    console.log(errorMessage, validErrors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {errorMessage && <BaseAlert massage={errorMessage} type="error" />}

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
        title="Зарегистрироваться"
        color="blue"
        disabled={!isValid || isSubmitting}
      />
    </form>
  );
};

export default AuthModalRegisterForm;
