import { AxiosInstance } from "axios";
import { IPostResponse, PostCreateDto, SearchPostDto } from "./types.api";

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<IPostResponse[]>("/posts");
    return data;
  },

  async create(dto: PostCreateDto) {
    const { data } = await instance.post<
      PostCreateDto,
      { data: IPostResponse }
    >("/posts", {
      title: dto.title,
      text: dto.text,
    });
    return data;
  },

  async update(id: number, dto: PostCreateDto) {
    const { data } = await instance.patch<PostCreateDto, { data: any }>(
      `/posts/${id}`,
      {
        title: dto.title,
        text: dto.text,
      }
    );
    return data;
  },

  async byId(id: number) {
    const { data } = await instance.get<IPostResponse>(`/posts/${id}`);
    return data;
  },

  async byIdWithComments(id: number) {
    const { data } = await instance.get<IPostResponse>(
      `/posts/${id}?comments=1`
    );
    return data;
  },

  async search(value: string) {
    const { data } = await instance.get<{
      posts: IPostResponse[];
      totalCount: number;
    }>(`/posts/search`, {
      params: {
        title: value,
        text: value,
      },
    });
    return data;
  },
});
