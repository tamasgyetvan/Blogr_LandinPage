type TextBoxProps = {
  title: string;
  content: string;
};

export const TextBox = ({ title, content }: TextBoxProps) => {
  return (
    <div className="textBox">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
