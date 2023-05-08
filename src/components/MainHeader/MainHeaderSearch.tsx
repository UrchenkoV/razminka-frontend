import { Api } from "@/utils/api";
import { IPostResponse } from "@/utils/api/types.api";
import Link from "next/link";
import React from "react";

const MainHeaderSearch: React.FC = () => {
  const [posts, setPosts] = React.useState<IPostResponse[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (posts.length) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [posts]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const data = await Api().post.search(e.target.value);

      setPosts(data.posts);
    } catch (err) {
      console.warn("Error on search", err);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="py-2 px-3 rounded-xl w-[300px] bg-blue-100 hover:bg-white focus:outline-none border focus:border-blue-300 focus:ring-1 focus:ring-blue-300 focus:ring-offset-2 focus:bg-white text-slate-600 placeholder:text-slate-600 duration-300"
        placeholder="Поиск"
        onChange={handleSearch}
        onBlur={() => setTimeout(() => setIsOpen(false), 300)}
        onFocus={() => {
          if (posts.length) setIsOpen(true);
        }}
      />
      {isOpen && (
        <div className="flex flex-col gap-1 absolute top-14 bg-white p-3 shadow-md rounded max-w-xl w-screen">
          {posts.map((obj) => (
            <Link
              key={obj.id}
              href={`/posts/${obj.id}`}
              className="hover:text-blue-500 duration-300"
              onClick={() => setIsOpen(false)}
            >
              {obj.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainHeaderSearch;
