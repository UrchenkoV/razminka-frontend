import { AxiosInstance } from "axios";
import { CommentCreateDto, ICommentItem } from "./types.api";

export const CommentApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<ICommentItem[]>("/comments");
    return data;
  },

  async create(dto: CommentCreateDto) {
    const { data } = await instance.post<
      CommentCreateDto,
      { data: ICommentItem }
    >("/comments", {
      text: dto.text,
      postId: dto.postId,
    });
    return data;
  },
});
