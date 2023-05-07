import EditorJS, { OutputData } from "@editorjs/editorjs";
import React, { FC } from "react";

interface IPostEditor {
  onChange: (blocks: OutputData["blocks"]) => void;
  initialBlocks?: OutputData["blocks"];
}

const PostEditor: FC<IPostEditor> = ({ onChange, initialBlocks }) => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Введите текст статьи...",
      data: {
        blocks: initialBlocks,
      },
      minHeight: 50,
      async onChange() {
        const { blocks } = await editor.save();
        onChange(blocks);
      },
    });
  }, []);

  return <div id="editorjs"></div>;
};

export default PostEditor;
