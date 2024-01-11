type FooterListProps = {
  title: string;
  listItems: Array<string>;
};

export const FooterList = ({ title, listItems }: FooterListProps) => {
  return (
    <div className="footerList">
      <h4 className="title">{title}</h4>
      <ul className="list">
        {listItems.map((item) => {
          return <li className="listItem">{item}</li>;
        })}
      </ul>
    </div>
  );
};
