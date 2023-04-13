export interface IPostCommentItem {
  id: number;
  text: string;
  likesCount: number;
  createdAt: string;
  user: {
    id: number;
    fullName: string;
    avatarUrl: string;
  };
}
