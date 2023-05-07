import clsx from "clsx";
import React, { FC } from "react";
import TextareaAutosize from "react-textarea-autosize";
import BaseButton from "../BaseButton";

interface IPostFullCommentInput {
  value: string;
  placeholder?: string;
  onChange: (e: any) => void;
  closeBtn?: string;
  onClose?: (e: any) => void;
  onClick?: (e: any) => void;
  btnTitle?: string;
}

const PostFullCommentInput: FC<IPostFullCommentInput> = ({
  value,
  placeholder,
  onChange,
  closeBtn,
  onClose,
  onClick,
  btnTitle = "Отправить",
}) => {
  const [isFocus, setIsFocus] = React.useState(false);

  return (
    <div
      className={clsx(
        "border border-gray-300 rounded-xl p-2 bg-gray-50 hover:bg-white",
        isFocus || (!isFocus && value) ? "bg-white" : ""
      )}
    >
      <TextareaAutosize
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder={placeholder}
        className="block w-full rounded-md py-2 px-3 text-gray-900 duration-300 outline-none placeholder:text-gray-500 text-base resize-none overflow-hidden bg-transparent"
      />
      <div className="flex justify-end gap-1 mt-1">
        {closeBtn && (
          <BaseButton onClick={onClose} title={closeBtn} color="transparent" />
        )}
        <BaseButton
          title={btnTitle}
          color="blue"
          disabled={!Boolean(value)}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default PostFullCommentInput;
