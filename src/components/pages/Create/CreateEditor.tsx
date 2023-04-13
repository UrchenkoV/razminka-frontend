import EditorJS from "@editorjs/editorjs";
import React from "react";

const CreateEditor = () => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Введите текст статьи...",
    });
  }, []);

  return <div id="editorjs"></div>;
};

export default CreateEditor;
