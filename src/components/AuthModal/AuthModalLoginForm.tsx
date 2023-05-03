import React, { FC } from "react";
import BaseInput from "../BaseInput";
import BaseButton from "../BaseButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginDto, LoginFormSchema } from "@/utils/validations/authValidation";
import { setCookie } from "nookies";
import BaseAlert from "../BaseAlert";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/user/userSlice";
import { Api } from "@/utils/api";

const AuthModalLoginForm: FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [validErrors, setValidErrors] = React.useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginDto>({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });
  console.log(errors, "errors", isValid);

  const onSubmit = async (dto: LoginDto) => {
    console.log(dto);
    try {
      setErrorMessage("");

      const data = await Api().user.login(dto);

      setCookie(null, "accessToken", data.accessToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      dispatch(setUserData(data));
    } catch (err: any) {
      console.warn(err, "Ошибка при регистрации.");

      if (err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {errorMessage && <BaseAlert massage={errorMessage} type="error" />}

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
        disabled={!isValid || isSubmitting}
      />
    </form>
  );
};

export default AuthModalLoginForm;
