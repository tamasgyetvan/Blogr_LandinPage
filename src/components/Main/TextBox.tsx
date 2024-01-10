type TextBoxProps = {
  title: string;
  content: string;
  fontType?: "bright";
};

export const TextBox = ({ title, content, fontType }: TextBoxProps) => {
  return (
    <div className={fontType === "bright" ? "textBox bright" : "textBox"}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
