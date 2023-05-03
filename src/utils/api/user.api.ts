import { CreateUserDto, LoginDto } from "../validations/authValidation";
import { axiosInstance } from "../axios";
import { AxiosInstance } from "axios";
import { UserResponse } from "./types.api";

export const UserApi = (instance: AxiosInstance) => ({
  async register(dto: CreateUserDto) {
    const { data } = await axiosInstance.post<
      CreateUserDto,
      { data: UserResponse }
    >("/auth/register", {
      email: dto.email,
      fullName: dto.fullName,
      password: dto.password,
    });
    return data;
  },

  async login(dto: LoginDto) {
    const { data } = await axiosInstance.post<
      CreateUserDto,
      { data: UserResponse }
    >("/auth/login", {
      email: dto.email,
      password: dto.password,
    });
    return data;
  },

  async getMe() {
    const { data } = await instance.get<UserResponse>("/users/me");
    return data;
  },
});
